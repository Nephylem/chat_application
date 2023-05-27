
let express = require("express");
let http = require("http");

let { Server } = require("socket.io");
const { isErrored } = require("stream");

let port = process.env.port || 5000;

let router = express.Router();

router.get("/", (req, res) => {
  res.send({ response: "Server is running..." }).status(200);
});

let app = express();
let server = http.createServer(app);
let io = new Server(server, {
  cors: {
    origin: "*",
  },
});

app.use(router);

users = [];
io.on("connection", (socket) => {
  console.log("New client connected");

  socket.on("join", ({ username, room, avatar }, callback) => {
    let error = false;

    username = username.trim().toLowerCase();
    room = room.trim().toLowerCase();

    let userExists = users.find(
      (user) => user.username === username && user.room === room
    );

    if (userExists) {
      error = true;
    } else {
      users.push({ username, room, avatar, socketid: socket.id });
      socket.join(room);
      socket.emit("message", {
        from: "ChatBot",
        text: `You joined the room!`,
      });
      socket.broadcast.to(room).emit("message", {
        from: "ChatBot",
        text: `${username.toUpperCase()} joined the room!`,
      });
    }
    callback(error);
  });

  socket.on("passMessage", ({ message, room, username, avatar }) => {
    io.to(room).emit("message", {
      text: message,
      room: room,
      from: username,
      avatar: avatar,
    });
  });
  socket.on("userLeft", ({ username, room }) => {
    username = username.trim().toLowerCase();
    users = users.filter((user) => user.username !== username);

    socket.broadcast.to(room).emit("message", {
      text: `${username.toUpperCase()} left the room!`,
      from: "ChatBot",
    });
  });

  socket.on("disconnect", () => {
    console.log("Disconnected.");
  });
});

server.listen(port, () => {
  console.log(`Server running on port ${port}...`);
});
