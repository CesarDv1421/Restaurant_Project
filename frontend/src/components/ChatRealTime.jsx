import { useContext, useEffect, useRef, useState } from "react";

//Context
import { AuthContext } from "../context/authContext";

//FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

//CSS
import "../css/ChatRealTime.css";

//Socket.io
import io from "socket.io-client";
//Ruta de conexion al Backend
const socket = io("http://localhost:3000");

const ChatRealTime = () => {
  const { userToken } = useContext(AuthContext);
  const [message, setMessage] = useState("");
  const [allMessage, setAllMessage] = useState([]);
  const chatMessage = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    const newMessage = {
      body: message,
      user: userToken.userName,
    };

    setAllMessage((prevMessage) => [...prevMessage, newMessage]);
    setMessage("");

    socket.emit("message", newMessage);
  };

  useEffect(() => {
    // Hacer scroll hacia abajo cuando llega un nuevo mensaje
    chatMessage.current.scrollTop = chatMessage.current.scrollHeight;

    const reveivedMessage = (message) => {
      setAllMessage((prevAllMessage) => [...prevAllMessage, message]);
    };

    socket.on("message", reveivedMessage);

    return () => {
      socket.off("message", reveivedMessage);
    };
  }, [allMessage]);

  return (
    <div className="chatContainer">
      <div className="chat-header">
        <h1>Servicio al Cliente Porks Grill</h1>
      </div>
      <div className="chat-body">
        <div className="chat-message" ref={chatMessage}>
          {allMessage.map((message, index) => (
            <div
              key={index}
              className={
                message.user === userToken.userName
                  ? "chat-message-otherItem"
                  : "chat-message-item"
              }
            >
              {message.user !== userToken.userName && (
                <div className="chat-message-item-user">{message.user}: </div>
              )}
              <div className="chat-message-item-body">{message.body}</div>
            </div>
          ))}
        </div>
        <form onSubmit={handleSubmit} className="chat-form">
          <input
            className="chat-message"
            type="text"
            name="chat"
            value={message}
            placeholder="Mensaje"
            onChange={(event) => setMessage(event.target.value)}
          />
          <div>
            <FontAwesomeIcon icon={faPaperPlane} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChatRealTime;
