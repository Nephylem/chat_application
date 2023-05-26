const styles = {
  container: {
    display: "grid",
    gridTemplateColumns: "auto 200px",
    gap: "20px",
    margin: "10px 0",
  },

  button: {
    cursor: "pointer",
    backgroundColor : "#79819D",
    color : "white",
    border : 'none', 
    borderRadius : "12px",
  },
  input: {
    height: "40px",
  },
};

function InputMessage() {
  return (
    <div style={styles.container}>
      <input placeholder="Type Message Here..." style={styles.input} type="text" />
      <button style={styles.button}>Send</button>
    </div>
  );
}

export default InputMessage;
