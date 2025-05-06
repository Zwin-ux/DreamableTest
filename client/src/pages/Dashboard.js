import React, { useState, useEffect } from 'react';
import InventoryTable from '../components/InventoryTable';
import TicketsTable from '../components/TicketsTable';
import AuditLogTable from '../components/AuditLogTable';
import TriggerPanel from '../components/TriggerPanel';
import Navbar from '../components/Navbar';
import ChatbotWidget from '../components/ChatbotWidget';

export default function Dashboard({ user, onLogout }) {
  const [section, setSection] = useState('Inventory');
  const [inventory, setInventory] = useState([]);
  const [tickets, setTickets] = useState([]);
  const [audit, setAudit] = useState([]);
  const [syncing, setSyncing] = useState(false);
  const [syncError, setSyncError] = useState(null);
  const [triggering, setTriggering] = useState(false);
  const [triggerResult, setTriggerResult] = useState(null);

  // Fetch data
  useEffect(() => {
    fetch('/inventory').then(r => r.json()).then(setInventory);
    fetch('/tickets').then(r => r.json()).then(setTickets);
    fetch('/audit').then(r => r.json()).then(setAudit);
  }, []);

  // Actions
  const handleSync = async () => {
    setSyncing(true); setSyncError(null);
    try {
      const res = await fetch('/sync/inventory', { method: 'POST' });
      if (!res.ok) throw new Error((await res.json()).error);
      await fetch('/audit').then(r => r.json()).then(setAudit);
    } catch (e) {
      setSyncError(e.message);
    } finally {
      setSyncing(false);
    }
  };
  const handleCreateTicket = async message => {
    await fetch('/tickets', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message })
    });
    await fetch('/tickets').then(r => r.json()).then(setTickets);
    await fetch('/audit').then(r => r.json()).then(setAudit);
  };
  const handleTrigger = async payload => {
    setTriggering(true); setTriggerResult(null);
    const res = await fetch('/webhook/trigger', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ payload })
    });
    setTriggerResult(await res.json());
    await fetch('/audit').then(r => r.json()).then(setAudit);
    setTriggering(false);
  };

  return (
    <div className="dashboard">
      <Navbar user={user} onLogout={onLogout} section={section} setSection={setSection} />
      <div className="dashboard-section">
        {section === 'Inventory' && <InventoryTable inventory={inventory} onSync={handleSync} syncing={syncing} syncError={syncError} />}
        {section === 'Tickets' && <TicketsTable tickets={tickets} onCreateTicket={handleCreateTicket} />}
        {section === 'Audit' && <AuditLogTable audit={audit} />}
        {section === 'Trigger' && <TriggerPanel onTrigger={handleTrigger} triggering={triggering} triggerResult={triggerResult} />}
      </div>
      <ChatbotWidget onCreateTicket={handleCreateTicket} />
    </div>
  );
}
