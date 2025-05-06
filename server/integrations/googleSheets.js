// Google Sheets integration stub for inventory and tickets
// Fill in your credentials in .env before using for real
const { google } = require('googleapis');

// This is a stub. To use for real, set up OAuth2 or Service Account and provide credentials.
async function getInventory() {
  // Uncomment and implement for real Google Sheets access
  // const sheets = google.sheets({ version: 'v4', auth });
  // const res = await sheets.spreadsheets.values.get({ ... });
  // return res.data.values;
  // Demo fallback:
  return [
    { id: 'SKU123', name: 'Widget', stock: 10 },
    { id: 'SKU456', name: 'Gadget', stock: 0 },
    { id: 'SKU789', name: 'Thingamajig', stock: 5 }
  ];
}

async function createTicket(ticket) {
  // Uncomment and implement for real Google Sheets access
  // const sheets = google.sheets({ version: 'v4', auth });
  // await sheets.spreadsheets.values.append({ ... });
  // Demo fallback:
  return { ...ticket, id: Math.floor(Math.random() * 10000) };
}

module.exports = { getInventory, createTicket };
