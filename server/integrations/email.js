// Email integration stub for sending alerts
// Fill in your SMTP or service credentials in .env before using for real
const nodemailer = require('nodemailer');

let transporter = null;
try {
  // transporter = nodemailer.createTransport({
  //   host: process.env.SMTP_HOST,
  //   port: process.env.SMTP_PORT,
  //   auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS }
  // });
} catch {
  transporter = null;
}

async function sendEmailAlert(to, subject, text) {
  if (!transporter) {
    console.log(`[EMAIL DEMO] To: ${to}, Subject: ${subject}, Text: ${text}`);
    return { ok: true };
  }
  // Uncomment for real email send
  // await transporter.sendMail({ from: process.env.SMTP_USER, to, subject, text });
  return { ok: true };
}

module.exports = { sendEmailAlert };
