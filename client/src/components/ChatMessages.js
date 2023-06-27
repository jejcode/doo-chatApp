import React, {useContext} from 'react'
import NameContext from "../context/NameContext";

const ChatMessages = () => {
    const context = useContext(NameContext)
    const {messages, userName} = context

    return (
        <div>
            {messages.map((msg, index) => {
                return(
                    <div key={index} className={msg.author === userName ? "row mb-2 p-2 rounded justify-content-end" : "row mb-2 p-2 rounded"}>
                        {typeof msg === 'string' ? 
                        <div className="d-flex justify-content-end fst-italic">
                            {msg} 
                        </div>
                        : 
                        <div className={msg.author === userName ? 'col-6 p-3 rounded-4 text-bg-primary d-flex align-items-center' : 'col-6 p-3 rounded-4 text-bg-success d-flex align-items-center'}>
                            <div>
                                <h4 className="m-0">{msg.author === userName ? 'You' : `${msg.author}`} said:</h4>
                                <p className="m-0">{msg.body}</p>

                            </div>
                        </div>
                        }
                    </div>
                )
            })}
        </div>
    )
}

export default ChatMessages