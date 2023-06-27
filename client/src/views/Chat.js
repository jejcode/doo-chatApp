import React, {useEffect, useRef} from 'react'
import ChatMessages from '../components/ChatMessages'
import ChatForm from '../components/ChatForm'
const Chat = () => {
    const endRef = useRef()

    useEffect(() => {
        endRef?.current?.scrollIntoView({ behavior: 'instant' })
        console.log('rerendering')
    })
    return (
        <>
            <ChatMessages />
            <ChatForm />
            <div ref={endRef}></div>

        </>
    )
}

export default Chat