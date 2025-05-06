import React from 'react';

export default function AuditLogTable({ audit }) {
  return (
    <div className="audit-log-table">
      <h3>Audit Log</h3>
      <table>
        <thead>
          <tr>
            <th>Time</th>
            <th>User</th>
            <th>Action</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {audit.map((entry, i) => (
            <tr key={i}>
              <td>{new Date(entry.timestamp).toLocaleString()}</td>
              <td>{entry.user}</td>
              <td>{entry.action}</td>
              <td><pre style={{ maxWidth: 200, whiteSpace: 'pre-wrap' }}>{JSON.stringify(entry.details, null, 2)}</pre></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
