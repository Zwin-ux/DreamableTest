const express = require('express');
const router = express.Router();
const logAudit = require('../utils/auditLogger');
// In-memory ticket log
const tickets = [];

// POST /tickets
router.post('/', (req, res) => {
  const ticket = { ...req.body, id: tickets.length + 1, created: new Date() };
  tickets.push(ticket);
  logAudit('ticket_created', { ticket });
  res.status(201).json(ticket);
});

// GET /tickets
router.get('/', (req, res) => {
  logAudit('ticket_listed', { count: tickets.length });
  res.json(tickets);
});

module.exports = router;
