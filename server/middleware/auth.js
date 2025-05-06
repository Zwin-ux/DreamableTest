// Simple access control middleware
module.exports = function(req, res, next) {
  // For demo, allow all requests but log access
  console.log(`[AUTH] ${req.method} ${req.originalUrl} by user=demo`);
  next();
};
