import React, {useEffect, useState} from 'react'
import logo from './logo.svg';
import './App.css';
import io from 'socket.io-client'
import Chat from './components/Chat';

function App() {
  const [socket] = useState(() => io(':8000'))

  useEffect(() => {
    // All event listeners go in the useEffect
    console.log('Is this running?')
    socket.on('Welcome', data => console.log(data))

    return () => socket.off('Welcome')
  }, [socket])
  return (
    <div className="App">
      <h1>Socket Test</h1>
    </div>
  );
}

export default App;
