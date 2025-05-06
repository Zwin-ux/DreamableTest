import React from 'react';
import Login from '../components/Login';

export default function LoginPage({ onLogin }) {
  return (
    <div className="login-page">
      <Login onLogin={onLogin} />
    </div>
  );
}
