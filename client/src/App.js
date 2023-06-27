import React, {useState, useEffect} from 'react'
import NameContext from './context/NameContext';
import Header from './components/Header';
import Chat from './views/Chat'
import LoginForm from './components/LoginForm';
import io from 'socket.io-client'


function App() {
  const [socket] = useState(() => io(':8000'))
  const [userName, setUserName] = useState('')
  const [loggedIn, setLoggedIn] = useState(false)
  const [messages, setMessages] = useState([])
  const [newUser, setNewUser] = useState('')


  useEffect(() => {
    // All event listeners go in the useEffect
    
    socket.on('connection')
    socket.on('new_user_joined_chat', data => {
      setMessages(prevMessages => [...prevMessages, `${data} joined the chat`])
    })
    socket.on('incoming_message', data => {
      setMessages(prevMessages => [...prevMessages, data])
    })

    return () => socket.off(true)
  }, [socket])

  return (
    <div className="container col-6">
      <NameContext.Provider value={{userName, setUserName, setLoggedIn, messages, setMessages, socket, newUser, setNewUser}}>
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
