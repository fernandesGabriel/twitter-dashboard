import React, { useState, useEffect } from 'react';
import socketClient from 'socket.io-client';

const SOCKET_SERVER = 'localhost:3000';
const ENDPOINT = '/socket/feed';

function App() {
  const [response, setResponse] = useState('');

  useEffect(() => {
    const socket = socketClient(SOCKET_SERVER, { path: ENDPOINT});

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

export default App;
