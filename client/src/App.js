import React, { useState, useEffect } from "react";
import io from "socket.io-client";

import ChatReciever, { ChatSender } from "./components/ChatBox";
import InputMessage from "./components/InputMessage";

function App() {
  return (
    <div style={{ height: "100vh", padding: "100px" }}>
      <h1 style={{ textAlign: "center" }}>Chat Application</h1>
      <div style={{ backgroundColor: "#313131" }}>
        <ChatReciever
          avatar={"https://picsum.photos/200"}
          message={"Hi, Goodmorning, How Are you?"}
          name={"john doe"}
        ></ChatReciever>
        <ChatSender
          avatar={"https://picsum.photos/200/300"}
          message={"Hi, Goodmorning, How Are you?"}
          name={"Jack doe"}
        ></ChatSender>
      </div>

      <div>
        <InputMessage></InputMessage>
      </div>
    </div>
  );
}

export default App;
