import React from 'react';
import { useState } from 'react';
import api from './api';

function App() {
  const [message, setMessage] = useState('');

  const fetchMessage = () => {
    api.get('/api/hello')
      .then(res => setMessage(res.data))
      .catch(err => console.error(err));
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <h1>{message}</h1>
      <button style={{ display: !message ? 'block' : 'none', padding: 10, marginTop: 10 }}
        onClick={fetchMessage}>Fetch Message</button>
    </div>
  );
}

export default App;
