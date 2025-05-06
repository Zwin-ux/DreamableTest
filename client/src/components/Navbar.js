import React from 'react';

export default function Navbar({ user, onLogout, section, setSection }) {
  return (
    <nav className="navbar">
      <span className="navbar-brand">Smart Support Agent</span>
      <span className="navbar-user">User: {user}</span>
      <button onClick={onLogout}>Logout</button>
      <div className="navbar-tabs">
        {['Inventory', 'Tickets', 'Audit', 'Trigger'].map(tab => (
          <button
            key={tab}
            className={section === tab ? 'active' : ''}
            onClick={() => setSection(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
    </nav>
  );
}
