import React from "react";
import { useState } from "react";

let styles = {
  input: {
    borderRadius: "2px",
    border: "1px solid #ccc",
    padding: 10,
    margin: 10,
    width: 200,
  },
  button: {
    border: "none",
    borderRadius: "2px",
    padding: 10,
    margin: 10,
    width: 200,
    color: "white",
    backgroundColor: "#009688",
    cursor: "pointer",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",

    backgroundColor: "#072E3E",
    alignSelf: "center",
    position: "fixed",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
  },
};

export default function UserAuth() {
  let [name, setName] = useState();
  let [room, setRoom] = useState();

  let [avatar, setAvatar] = useState();
  function signIn() {
    if (!name) {
      alert("Please input your name");
    } else if (!room) {
      alert("Please input your Room");
    } else if (!avatar) {
      alert("Please enter your avatar. You can also get from picsum.com");
    } else {
      localStorage.setItem("username", name);
      localStorage.setItem("room", room);
      localStorage.setItem("avatar", avatar);
      window.location.href = "/chatbox";
    }
  }

  return (
    <div style={styles.container}>
      <h1 style={{ color: "#ffff" }}>Login</h1>
      <input
        onChange={(e) => {
          setName(e.target.value);
        }}
        style={styles.input}
        type="text"
        placeholder="Name"
      />
      <input
        onChange={(e) => {
          setRoom(e.target.value);
        }}
        style={styles.input}
        type="text"
        placeholder="Room"
      />

      <input
        onChange={(e) => {
          setAvatar(e.target.value);
        }}
        style={styles.input}
        type="text"
        placeholder="Enter desired avatar image URL"
      />

      <button onClick={signIn} style={styles.button}>
        Login
      </button>
    </div>
  );
}
