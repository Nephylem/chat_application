import React, { useState, useEffect } from "react";
import "./chatbox.css";
import io from "socket.io-client";

import InputMessage from "../InputMessage";
import ChatReciever, { ChatSender } from "../ChatHeadings";
import ScrollToBottom from "react-scroll-to-bottom";

let socket;
function ChatContainer() {
  socket = io("localhost:5000");

  const [message, setMessage] = useState("");
  const [messageHistory, setMessageHistory] = useState([]);

  const [username, setUsername] = useState(localStorage.getItem("username"));
  const [room, setRoom] = useState(localStorage.getItem("room"));
  const [avatar, setAvatar] = useState(localStorage.getItem("avatar"));

  function passMessage(e) {
    e.preventDefault();
    if (message) {
      socket.emit("passMessage", { message, room, username, avatar });
      setMessage("");
    }
  }
  useEffect(() => {
    socket.emit("join", { username, room, avatar }, (err) => {
      if (err) {
        alert("Username Already Taken");
        window.location.href = "/";
      }
    });
  }, [username, avatar, room]);

  useEffect(() => {
    socket.on("message", (msg) => {
      setMessageHistory((prev) => [...prev, msg]);
    });
  }, []);
  return (
    <div className="chat-container">
      <div className="chat-header">
        Chat Room: {room} <br/>
        Username: {username} <br/>
        <div className="account-head">
          <button
            onClick={(e) => {
              localStorage.removeItem("username");
              localStorage.removeItem("room");
              localStorage.removeItem("avatar");
              socket.emit("userLeft", { username, room });
              window.location.href = "/";
            }}
            className="leave-room"
          >
            Leave Room
          </button>
        </div>
      </div>
      <ScrollToBottom className="chat-box">
        {messageHistory.map((data, i) =>
          data.from === username.trim().toLowerCase() ? (
            <ChatSender
              key={i}
              name={data.from}
              avatar={data.avatar}
              message={data.text}
            ></ChatSender>
          ) : (
            <ChatReciever
              key={i}
              name={data.from}
              avatar={data.avatar}
              message={data.text}
            ></ChatReciever>
          )
        )}
      </ScrollToBottom>
      <InputMessage
        message={message}
        setMessage={setMessage}
        passMessage={passMessage}
      ></InputMessage>
    </div>
  );
}

export default ChatContainer;
