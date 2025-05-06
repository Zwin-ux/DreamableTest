// Dialogflow integration stub for NLP intent classification
// Fill in your credentials in .env before using for real
// See Dialogflow Node.js docs for setup
let dialogflowClient = null;
try {
  // const dialogflow = require('@google-cloud/dialogflow');
  // dialogflowClient = new dialogflow.SessionsClient({ keyFilename: process.env.DIALOGFLOW_KEYFILE });
} catch {
  dialogflowClient = null;
}

async function classifyIntent(message) {
  if (!dialogflowClient) {
    // Demo fallback: simple keyword logic
    if (/inventory|stock|in stock/i.test(message)) return { intent: 'inventory_query', confidence: 0.95 };
    if (/order|status/i.test(message)) return { intent: 'order_status', confidence: 0.92 };
    if (/help|support|reset|problem|issue/i.test(message)) return { intent: 'support_request', confidence: 0.90 };
    return { intent: 'unknown', confidence: 0.5 };
  }
  // Uncomment for real Dialogflow call
  // const sessionPath = dialogflowClient.projectAgentSessionPath(...);
  // const request = { ... };
  // const responses = await dialogflowClient.detectIntent(request);
  // Parse responses for intent and confidence
  // return { intent, confidence };
  return { intent: 'unknown', confidence: 0 };
}

module.exports = { classifyIntent };
