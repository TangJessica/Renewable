const { GoogleSpreadsheet } = require("google-spreadsheet");

module.exports = async (req, res) => {
  try {
    const { sessionId, duration } = req.body;

    const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID);
    await doc.useServiceAccountAuth({
      client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
    });

    await doc.loadInfo();
    const sheet = doc.sheetsByIndex[0];
    const rows = await sheet.getRows();

    const row = rows.find(r => r.session_id === sessionId);
    if (!row) return res.status(404).end();

    row.engaged = true;
    row.duration_seconds = duration;
    await row.save();

    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).end();
  }
};