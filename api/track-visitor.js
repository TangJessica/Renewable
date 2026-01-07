const { GoogleSpreadsheet } = require("google-spreadsheet");

module.exports = async (req, res) => {
  try {
    const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID);

    await doc.useServiceAccountAuth({
      client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
    });

    await doc.loadInfo();  // <- Will throw if auth fails
    const sheet = doc.sheetsByIndex[0];

    const ip =
      req.headers["x-forwarded-for"]?.split(",")[0] ||
      req.socket.remoteAddress;

    await sheet.addRow({
      timestamp: new Date().toISOString(),
      ip,
      country: "",
      city: "",
      region: "",
      user_agent: req.headers["user-agent"],
    });

    res.status(200).json({ success: true });
  } catch (err) {
    console.error("Google Sheets error full:", err); // log full error
    res.status(500).json({ error: err.message });
  }
};