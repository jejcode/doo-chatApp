import React, { useContext, useState } from "react";
import NameContext from "../context/NameContext";

const ChatForm = () => {
  const [message, setMessage] = useState("");
  const context = useContext(NameContext);
  const { userName, setMessages, socket } = context;

  const submitHandler = (e) => {
    e.preventDefault();
    const newMessage = { author: userName, body: message };
    socket.emit("client_sent_message", newMessage);
    setMessages((prevMessages) => [...prevMessages, newMessage]);
    setMessage("");
  };
  return (
    <div className="row mb-4">
      <div className="col bg-light p-3 rounded">
        <form onSubmit={(e) => submitHandler(e)}>
          <div className="row p-4 justify-content-between align-items-end">
            <div className="col">
              <input
                className="form-control"
                type="textarea"
                onChange={(e) => setMessage(e.target.value)}
                value={message}
              />
            </div>
            <input
              className="col-auto btn btn-primary ms-4 mt-2"
              type="submit"
              value="Send"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChatForm;
