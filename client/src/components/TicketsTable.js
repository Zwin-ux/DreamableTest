import React, { useState } from 'react';

export default function TicketsTable({ tickets, onCreateTicket }) {
  const [message, setMessage] = useState('');
  return (
    <div className="tickets-table">
      <h3>Support Tickets</h3>
      <form onSubmit={e => { e.preventDefault(); if (message) { onCreateTicket(message); setMessage(''); } }}>
        <input
          type="text"
          placeholder="New ticket message"
          value={message}
          onChange={e => setMessage(e.target.value)}
        />
        <button type="submit">Create Ticket</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Message</th>
            <th>Created</th>
          </tr>
        </thead>
        <tbody>
          {tickets.map(t => (
            <tr key={t.id}>
              <td>{t.id}</td>
              <td>{t.message}</td>
              <td>{new Date(t.created).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
