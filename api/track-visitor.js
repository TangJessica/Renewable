const { GoogleSpreadsheet } = require("google-spreadsheet");

module.exports = async (req, res) => {
  try {
    const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID);

    // Authenticate with Google
    await doc.useServiceAccountAuth({
      client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
    });

    await doc.loadInfo();
    const sheet = doc.sheetsByIndex[0];

    // Get visitor IP
    const ip =
      req.headers["x-forwarded-for"]?.split(",")[0] ||
      req.socket.remoteAddress;

    // Call ipregistry API
    let geoData = {};
    try {
      const response = await fetch(`https://api.ipregistry.co/${ip}?key=${process.env.IPREGISTRY_KEY}`);
      geoData = await response.json();
    } catch (err) {
      console.error("ipregistry API error:", err.message);
    }

    // Add row to Google Sheet
    await sheet.addRow({
      timestamp: new Date().toISOString(),
      ip,
      country: geoData.location?.country?.name || "",
      region: geoData.location?.region?.name || "",
      city: geoData.location?.city || "",
      user_agent: req.headers["user-agent"] || "",
    });

    res.status(200).json({ success: true });
  } catch (err) {
    console.error("Google Sheets error full:", err);
    res.status(500).json({ error: err.message });
  }
};