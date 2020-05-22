import React, { useState, useEffect } from 'react';
import socketIOClient from 'socket.io-client';

const ENDPOINT = 'localhost:3000';

function App() {
  const [response, setResponse] = useState('');

  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);

    socket.on('FromAPI', data => {
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
