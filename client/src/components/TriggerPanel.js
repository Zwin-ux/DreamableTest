import React, { useState } from 'react';

export default function TriggerPanel({ onTrigger, triggering, triggerResult }) {
  const [payload, setPayload] = useState('');
  return (
    <div className="trigger-panel">
      <h3>Orchestration Trigger</h3>
      <form onSubmit={e => { e.preventDefault(); onTrigger(payload); }}>
        <input
          type="text"
          placeholder="Trigger payload (optional)"
          value={payload}
          onChange={e => setPayload(e.target.value)}
        />
        <button type="submit" disabled={triggering}>{triggering ? 'Triggering...' : 'Trigger Webhook'}</button>
      </form>
      {triggerResult && <div className="trigger-result"><pre>{JSON.stringify(triggerResult, null, 2)}</pre></div>}
    </div>
  );
}
