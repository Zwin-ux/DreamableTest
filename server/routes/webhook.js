const express = require('express');
const router = express.Router();
const logAudit = require('../utils/auditLogger');
// Simulate webhook trigger (e.g., from Google Form or Zapier)
router.post('/trigger', (req, res) => {
  logAudit('webhook_triggered', { data: req.body });
  res.json({ status: 'Webhook received', data: req.body, triggeredAt: new Date() });
});

module.exports = router;
