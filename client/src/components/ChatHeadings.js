import React from "react";
import { Avatar, Image, Row } from "antd";

function ChatReciever({ avatar, name, message }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-start",
        flexDirection: "row",
      }}
    >
      <Avatar
        size={"large"}
        src={
          <Image
            src={avatar}
            width={42}
            height={42}
            style={{ borderRadius: "100%", objectFit: "cover" }}
          ></Image>
        }
      ></Avatar>
      <p
        style={{
          padding: "15px",
          backgroundColor: "#F4F7FC",
          borderRadius: "10px",
          maxWidth: "300px",
          textAlign: "start",
        }}
      >
        <strong style={{textTransform : "capitalize"}}>{name}</strong>
        <br />
        <br />
        {message}
      </p>
    </div>
  );
}

function ChatSender({ avatar, message, name }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-start",
        flexDirection: "row-reverse",
      }}
    >
      <Avatar
        size={"large"}
        src={
          <Image
            src={avatar}
            width={42}
            height={42}
            style={{ borderRadius: "100%", objectFit: "cover" }}
          ></Image>
        }
      ></Avatar>
      <p
        style={{
          padding: "15px",
          backgroundColor: "#EBEEF0",
          borderRadius: "10px",
          maxWidth: "300px",
          textAlign: "end",
        }}
      >
        <strong style={{textTransform : "capitalize"}}>{name}</strong>
        <br />
        <br />
        {message}
      </p>
    </div>
  );
}

export default ChatReciever;
export { ChatSender };
