// Airtable integration stub for inventory and tickets
// Fill in your API key and base ID in .env before using for real
const Airtable = require('airtable');

const demoMode = process.env.DEMO_MODE === 'true';
let base;
try {
  base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(process.env.AIRTABLE_BASE_ID);
} catch {
  base = null; // Not configured yet
}

// Fetch inventory from Airtable or use demo data for client-facing demos
async function getInventory() {
  if (demoMode || !base) {
    // Demo fallback data for impressive, safe client demos
    return [
      { id: 'SKU123', name: 'Widget', stock: 10 },
      { id: 'SKU456', name: 'Gadget', stock: 0 },
      { id: 'SKU789', name: 'Thingamajig', stock: 5 }
    ];
  }
  // Real Airtable integration
  const records = await base('Inventory').select().all();
  return records.map(r => ({ id: r.id, ...r.fields }));
}

// Create ticket in Airtable or use demo data for client-facing demos
async function createTicket(ticket) {
  if (demoMode || !base) {
    // Demo fallback: fake ticket creation
    return { ...ticket, id: Math.floor(Math.random() * 10000) };
  }
  // Real Airtable integration
  const record = await base('Tickets').create([{ fields: ticket }]);
  return { id: record[0].id, ...record[0].fields };
}

module.exports = { getInventory, createTicket };
