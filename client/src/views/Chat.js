import ChatMessages from '../components/ChatMessages'
import ChatForm from '../components/ChatForm'
import io from 'socket.io-client'
const Chat = () => {
    const [socket] = useState(() => io(':8000'))

    useEffect(() => {
        // All event listeners go in the useEffect
        console.log('Is this running?')
        socket.on('Welcome', data => console.log(data))

        return () => socket.off('Welcome')
    }, [socket])
    return (
        <>
            <ChatMessages />
            <ChatForm />

        </>
    )
}

export default Chat