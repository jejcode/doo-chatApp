import React, {useContext} from "react";
import NameContext from "../context/NameContext";
import { getAllMessages } from "../services/message-service";

const LoginForm = () => {
    const context = useContext(NameContext)
    const {name, setName, setLoggedIn, setMessages} = context

    const submitHandler = (e) => {
        e.preventDefault()
        getAllMessages()
            .then(allMessages => {
                setMessages([allMessages, `${name} joined the chat.`])
                setLoggedIn(true)
            })
            .catch(err => console.log(err))

    }

    return (
        <div className="row">
            <div className="col bg-light p-3 rounded">
                <h2 className="d-flex justify-content-center text-primary">Get started right now!</h2>
                <form onSubmit={(e) => submitHandler(e)}>
                    <div className="row p-4 justify-content-between align-items-end">
                        <div className="col">
                            <label className="form-label" htmlFor="chatName">I want to start chatting with the name:</label>
                            <input className="form-control" type="text" name="chatName" id="chatName"  onChange={(e) => setName(e.target.value)} value={ name }/>
                        </div>
                        <input className="col-auto btn btn-success ms-4 mt-2" type="submit" value="Start chatting" />
                        
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LoginForm