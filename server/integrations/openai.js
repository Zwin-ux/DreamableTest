// OpenAI integration stub for NLP intent classification
// Fill in your API key in .env before using for real
const { Configuration, OpenAIApi } = require('openai');

let openai;
try {
  openai = new OpenAIApi(new Configuration({ apiKey: process.env.OPENAI_API_KEY }));
} catch {
  openai = null;
}

async function classifyIntent(message) {
  if (!openai) {
    // Demo fallback: simple keyword logic
    if (/inventory|stock|in stock/i.test(message)) return { intent: 'inventory_query', confidence: 0.95 };
    if (/order|status/i.test(message)) return { intent: 'order_status', confidence: 0.92 };
    if (/help|support|reset|problem|issue/i.test(message)) return { intent: 'support_request', confidence: 0.90 };
    return { intent: 'unknown', confidence: 0.5 };
  }
  // Uncomment for real OpenAI call
  // const response = await openai.createChatCompletion({ ... });
  // Parse response for intent and confidence
  // return { intent, confidence };
  return { intent: 'unknown', confidence: 0 };
}

module.exports = { classifyIntent };
