// Central audit logger utility
let auditLog;
try {
  auditLog = require('../routes/audit').auditLog;
} catch {
  auditLog = null;
}

function logAudit(action, details, user = 'demo') {
  const entry = {
    user,
    action,
    details,
    timestamp: new Date(),
  };
  // Push to in-memory auditLog (imported from audit.js)
  if (Array.isArray(auditLog)) {
    auditLog.push(entry);
  }
  // For demo, also print to console
  console.log('[AUDIT]', entry);
}

module.exports = logAudit;
