const express = require('express');
const router = express.Router();
const logAudit = require('../utils/auditLogger');
// Simulate Airtable/Google Sheets sync
let lastInventorySync = null;
let lastTicketsSync = null;

// POST /sync/inventory
router.post('/inventory', (req, res) => {
  logAudit('sync_inventory_attempt', {});
  // Simulate random failure
  if (Math.random() < 0.2) {
    logAudit('sync_inventory_failed', { error: 'Airtable sync failed (simulated)' });
    return res.status(500).json({ error: 'Airtable sync failed (simulated)' });
  }
  lastInventorySync = new Date();
  logAudit('sync_inventory_success', { syncedAt: lastInventorySync });
  res.json({ status: 'success', syncedAt: lastInventorySync });
});

// POST /sync/tickets
router.post('/tickets', (req, res) => {
  logAudit('sync_tickets_attempt', {});
  if (Math.random() < 0.2) {
    logAudit('sync_tickets_failed', { error: 'Google Sheets sync failed (simulated)' });
    return res.status(500).json({ error: 'Google Sheets sync failed (simulated)' });
  }
  lastTicketsSync = new Date();
  logAudit('sync_tickets_success', { syncedAt: lastTicketsSync });
  res.json({ status: 'success', syncedAt: lastTicketsSync });
});

module.exports = router;
