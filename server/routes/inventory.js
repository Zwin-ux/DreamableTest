const express = require('express');
const router = express.Router();
const logAudit = require('../utils/auditLogger');
const { getInventory } = require('../integrations/airtable'); // Swap for googleSheets if needed

// GET /inventory
router.get('/', async (req, res) => {
  try {
    const inventory = await getInventory();
    logAudit('inventory_list', { inventory });
    res.json(inventory);
  } catch (e) {
    logAudit('inventory_list_error', { error: e.message });
    res.status(500).json({ error: 'Failed to fetch inventory' });
  }
});

// GET /inventory/:id
router.get('/:id', async (req, res) => {
  try {
    const inventory = await getInventory();
    const item = inventory.find(i => i.id === req.params.id);
    if (!item) {
      logAudit('inventory_get_error', { id: req.params.id, error: 'Not found' });
      return res.status(404).json({ error: 'Not found' });
    }
    logAudit('inventory_get', { item });
    res.json(item);
  } catch (e) {
    logAudit('inventory_get_error', { id: req.params.id, error: e.message });
    res.status(500).json({ error: 'Failed to fetch inventory' });
  }
});

// POST /inventory/:id/update
router.post('/:id/update', (req, res) => {
  const { stock } = req.body;
  const item = inventory.find(i => i.id === req.params.id);
  if (!item) {
    logAudit('inventory_update_error', { id: req.params.id, error: 'Not found' });
    return res.status(404).json({ error: 'Not found' });
  }
  const oldStock = item.stock;
  item.stock = stock;
  logAudit('inventory_update', { id: req.params.id, oldStock, newStock: stock });
  res.json(item);
});

module.exports = router;
