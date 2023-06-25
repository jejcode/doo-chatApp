import React, {useContext, useState} from "react";
import NameContext from "../context/NameContext";
import { createMessage } from "../services/message-service";

const ChatForm = () => {
    const [message, setMessage] = useState('')
    const context = useContext(NameContext)
    const {name, setMessages} = context

    const submitHandler = (e) => {
        e.preventDefault()
        createMessage({author: name, body: message})
            .then(msg => {
                setMessages(prevMessages => [...prevMessages, message])
            })
            .catch(err => console.log(err))
    }
    return (
        <div className="row">
            <div className="col bg-light p-3 rounded">
                <form onSubmit={(e) => submitHandler(e)}>
                    <div className="row p-4 justify-content-between align-items-end">
                        <div className="col">
                            <input className="form-control" type="textarea" name="chatName" id="chatName"  onChange={(e) => setMessage(e.target.value)} value={ message }/>
                        </div>
                        <input className="col-auto btn btn-primary ms-4 mt-2" type="submit" value="Send" />
                        
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ChatForm