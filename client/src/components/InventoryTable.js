import React from 'react';

export default function InventoryTable({ inventory, onSync, syncing, syncError }) {
  return (
    <div className="inventory-table">
      <div className="inventory-header">
        <h3>Inventory</h3>
        <button onClick={onSync} disabled={syncing}>{syncing ? 'Syncing...' : 'Sync to Airtable'}</button>
        {syncError && <span className="error">{syncError}</span>}
      </div>
      <table>
        <thead>
          <tr>
            <th>SKU</th>
            <th>Name</th>
            <th>Stock</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {inventory.map(item => {
            let status = 'In Stock', color = 'green';
            if (item.stock === 0) { status = 'Out of Stock'; color = 'red'; }
            else if (item.stock < 5) { status = 'Low'; color = 'orange'; }
            return (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.stock}</td>
                <td><span style={{ color, fontWeight: 'bold' }}>{status}</span></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
