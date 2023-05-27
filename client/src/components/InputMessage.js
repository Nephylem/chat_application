import { useState } from "react";

const styles = {
  container: {
    display: "grid",
    gridTemplateColumns: "auto 200px",
    gap: "20px",
    margin: "10px 0",
  },

  button: {
    cursor: "pointer",
    backgroundColor: "#79819D",
    color: "white",
    border: "none",
    borderRadius: "12px",
  },
  input: {
    height: "40px",
  },
};

function InputMessage({ passMessage, setMessage, message }) {
  return (
    <form style={styles.container}>
      <input
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={(event) =>
          event.key === "Enter" ? passMessage(event) : null
        }
        placeholder="Type Message Here..."
        style={styles.input}
        type="text"
        value={message}
      />
      <button
        onClick={(e) => {
          passMessage(e);
        }}
        style={styles.button}
      >
        Send
      </button>
    </form>
  );
}

export default InputMessage;
