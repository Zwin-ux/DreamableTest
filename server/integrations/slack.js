// Slack integration stub for sending alerts
// Fill in your SLACK_WEBHOOK_URL in .env before using for real
const axios = require('axios');

async function sendSlackAlert(message) {
  const url = process.env.SLACK_WEBHOOK_URL;
  if (!url) {
    console.log('[SLACK DEMO]', message);
    return { ok: true };
  }
  // Uncomment for real Slack call
  // await axios.post(url, { text: message });
  return { ok: true };
}

module.exports = { sendSlackAlert };
