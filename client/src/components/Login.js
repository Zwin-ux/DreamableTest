import React, { useState } from 'react';

export default function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const handleSubmit = e => {
    e.preventDefault();
    if (username.trim()) onLogin(username);
  };
  return (
    <div className="login-container">
      <h2>Smart Support Agent Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter username (demo)"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
