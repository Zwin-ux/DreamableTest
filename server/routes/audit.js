const express = require('express');
const router = express.Router();

// In-memory audit log
const auditLog = [];

// POST /audit
router.post('/', (req, res) => {
  const entry = { ...req.body, timestamp: new Date() };
  auditLog.push(entry);
  res.status(201).json(entry);
});

// GET /audit
router.get('/', (req, res) => {
  res.json(auditLog);
});

module.exports = router;
module.exports.auditLog = auditLog;
