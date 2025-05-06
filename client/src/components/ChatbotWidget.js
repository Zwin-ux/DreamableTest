import React, { useState } from 'react';

export default function ChatbotWidget({ onClassify, onCreateTicket }) {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hi! Ask me anything about your order, inventory, or support.' }
  ]);
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;
    const userMsg = { sender: 'user', text: input };
    setMessages(msgs => [...msgs, userMsg]);
    setLoading(true);
    try {
      const res = await fetch('/nlp/classify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input })
      });
      const { intent, confidence } = await res.json();
      let botText = `Intent: ${intent} (confidence: ${confidence})`;
      if (intent === 'inventory_query') {
        const invRes = await fetch('/inventory');
        const inventory = await invRes.json();
        botText = 'Inventory:\n' + inventory.map(i => `${i.name}: ${i.stock}`).join(', ');
      } else if (intent === 'order_status') {
        botText = 'Order status: All orders are currently being processed.';
      } else if (intent === 'support_request') {
        botText = 'Would you like to create a support ticket?';
      } else {
        botText = 'Sorry, I did not understand. Try asking about inventory, orders, or support.';
      }
      setMessages(msgs => [...msgs, { sender: 'bot', text: botText }]);
      if (intent === 'support_request' && onCreateTicket) {
        // Simulate auto ticket creation
        await onCreateTicket(input);
        setMessages(msgs => [...msgs, { sender: 'bot', text: 'A support ticket has been created for you.' }]);
      }
    } catch (e) {
      setMessages(msgs => [...msgs, { sender: 'bot', text: 'Error: ' + e.message }]);
    } finally {
      setLoading(false);
      setInput('');
    }
  };

  return (
    <div className="chatbot-widget" style={{ position: 'fixed', bottom: 24, right: 24, zIndex: 1000 }}>
      {open ? (
        <div className="chatbot-window">
          <div className="chatbot-header" onClick={() => setOpen(false)}>Smart Support Chatbot ✨</div>
          <div className="chatbot-messages">
            {messages.map((m, i) => (
              <div key={i} className={`chatbot-message ${m.sender}`}>{m.text}</div>
            ))}
            {loading && <div className="chatbot-message bot">Thinking...</div>}
          </div>
          <div className="chatbot-input-row">
            <input
              type="text"
              value={input}
              placeholder="Type your question..."
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleSend()}
              disabled={loading}
            />
            <button onClick={handleSend} disabled={loading}>Send</button>
          </div>
        </div>
      ) : (
        <button className="chatbot-fab" onClick={() => setOpen(true)}>💬</button>
      )}
    </div>
  );
}
