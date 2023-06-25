import React, {useState} from 'react'
import NameContext from './context/NameContext';
import Header from './components/Header';
import Chat from './views/Chat'
import LoginForm from './components/LoginForm';

function App() {
  // const [socket] = useState(() => io(':8000'))

  // useEffect(() => {
  //   // All event listeners go in the useEffect
  //   console.log('Is this running?')
  //   socket.on('Welcome', data => console.log(data))

  //   return () => socket.off('Welcome')
  // }, [socket])
  const [name, setName] = useState('')
  const [loggedIn, setLoggedIn] = useState(false)
  const [messages, setMessages] = useState([])

  return (
    <div className="container col-6">
      <NameContext.Provider value={{name, setName, setLoggedIn, messages, setMessages}}>
        <Header>
          <h1 className="m-0">MERN Chat</h1>
        </Header>
        {loggedIn ? 
          <Chat />
          :
          <LoginForm /> 
      }
      </NameContext.Provider>
    </div>
  );
}

export default App;
