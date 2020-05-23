import React, { useState, useEffect } from 'react';
import socketClient from 'socket.io-client';

function Dashboard() {
  const [response, setResponse] = useState('');

  useEffect(() => {
    const socket = socketClient(process.env.REACT_APP_SOCKET_HOSTNAME, { path: '/socket/feed' });

    socket.on('feed', data => {
      setResponse(data);
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p> Twitter Dasboard {response}</p>
      </header>
    </div>
  );
}

export default Dashboard;
