# Smart Support Agent for Inventory Management

A full-stack, demo-ready app for automating support and inventory workflows for Zenix Retail. This project is designed to showcase **No-Code/Low-Code/AI Agent** concepts for modern automation and support.

---

## 🧠 Vision: No-Code/Low-Code/AI Agent Demo
- **No-Code/Low-Code**: Most flows (NLP, automations, integrations) are API-driven and could be built with drag-and-drop tools like Zapier, Make.com, or Airtable. This repo shows the core logic in code, but every feature is modular and ready for no-code extension.
- **AI Agent**: The chatbot widget demonstrates how an AI agent can classify user intent (FAQ, support, inventory) and trigger automations.
- **Automation**: Inventory sync, ticket logging, and webhook triggers simulate real-world RPA and workflow automation.

---

## 🗂️ Structure
- `/server`: Node/Express backend (API, NLP, ticketing, security, audit logging)
- `/client`: React frontend (dashboard, chatbot, UI)

---

## 🚀 Quickstart
```sh
cd server
npm install
npm start

cd ../client
npm install
npm start
```

---

## ✨ Features
- **NLP-powered chatbot** (intent detection, FAQ, support, inventory queries)
- **Inventory API** (mocked, with color-coded status)
- **Ticket logging** (auto-create from chatbot or UI)
- **Audit log** (all actions/errors tracked)
- **Security** (basic access control)
- **Dashboard UI** (React, modular, responsive)
- **Mock integrations**: Airtable/Google Sheets, Zapier/Make.com, OpenAI/Dialogflow

---

## 🖥️ Demo Walkthrough Script (for Interviews)

1. **Login as demo user**
   - Show minimalist login flow (no password, demo only)
2. **Show Inventory Table**
   - Point out color-coded stock status (green/yellow/red)
   - Click "Sync to Airtable" (simulate integration, show error handling)
3. **Show Ticket Log**
   - Create a new ticket via UI (show instant update)
4. **Show Audit Log**
   - Every action is logged (user, action, timestamp, details)
5. **Trigger Orchestration**
   - Use the Trigger panel to simulate a webhook (e.g., Google Form, Zapier)
   - Show resulting audit log entry
6. **Chatbot NLP Demo**
   - Click the chatbot widget (bottom-right)
   - Ask: "Is the Widget in stock?" → See intent classified, inventory data shown
   - Ask: "How do I reset my password?" → See support intent, offer to create ticket
   - Accept, and show ticket is logged in UI and audit log
7. **Explain No-Code/Low-Code Angle**
   - Point out that every flow could be built with Zapier/Make/Airtable (show code modularity)
   - Explain how the backend is ready for plug-and-play with no-code tools
   - Emphasize how the chatbot and dashboard can be extended by non-engineers

---

## 🔌 Plug-and-Play API Integrations

You can enable any of these integrations by adding the required keys to your `.env` file in `/server` and uncommenting the real API code in the matching file in `/server/integrations/`.

| Integration   | .env Keys Needed                  | Integration File                |
|--------------|-----------------------------------|---------------------------------|
| **Airtable** | `AIRTABLE_API_KEY`, `AIRTABLE_BASE_ID` | `integrations/airtable.js`      |
| **Google Sheets** | `GOOGLE_SHEETS_ID`, Google Service Account credentials | `integrations/googleSheets.js` |
| **OpenAI GPT** | `OPENAI_API_KEY`                 | `integrations/openai.js`        |
| **Dialogflow** | `DIALOGFLOW_KEYFILE` (path to key) | `integrations/dialogflow.js`    |
| **Slack Alerts** | `SLACK_WEBHOOK_URL`             | `integrations/slack.js`         |
| **Email Alerts** | `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS` | `integrations/email.js`         |

### Quickstart for Any Integration
1. Add the required keys to your `.env` file in `/server` (see above).
2. Uncomment the real API code in the integration file.
3. Restart your backend server.
4. The app will now use live data/automation for that integration!

If a key is missing, the app will fall back to demo/mock mode so you can always demo safely.

---

## 🛠️ Extending & Customizing
- **Plug in real APIs** (Airtable, Google Sheets, OpenAI, etc.)
- **Swap backend logic for Zapier/Make.com webhooks**
- **Add more NLP intents or RPA flows**
- **Style the dashboard for your brand**

---

## 📚 For Interviewers: What This Shows
- End-to-end automation (NLP, API, RPA, governance)
- Real-world API integration
- No-code/low-code readiness
- Security and audit best practices
- Modular, demo-friendly code

---

*For more info, see `/server/routes/` for API endpoints and `/client/src/` for UI components. Enjoy your demo!*
