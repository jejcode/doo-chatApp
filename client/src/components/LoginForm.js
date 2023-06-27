import React, {useContext} from "react";
import NameContext from "../context/NameContext";

const LoginForm = () => {
    const context = useContext(NameContext)
    const {userName, setUserName, setLoggedIn, setMessages, socket} = context

    const submitHandler = (e) => {
        e.preventDefault()
        socket.emit('join_server', userName)
        socket.on('send_all_messages', allMessages => {
            setMessages([...allMessages, `You joined the chat`])
            setLoggedIn(true)
        })
        

    }

    return (
        <div className="row">
            <div className="col bg-light p-3 rounded">
                <h2 className="d-flex justify-content-center text-primary">Get started right now!</h2>
                <form onSubmit={(e) => submitHandler(e)}>
                    <div className="row p-4 justify-content-between align-items-end">
                        <div className="col">
                            <label className="form-label" htmlFor="chatName">I want to start chatting with the name:</label>
                            <input className="form-control" type="text" name="chatName" id="chatName"  onChange={(e) => setUserName(e.target.value)} value={ userName }/>
                        </div>
                        <input className="col-auto btn btn-success ms-4 mt-2" type="submit" value="Start chatting" />
                        
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LoginForm