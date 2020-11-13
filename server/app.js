const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors());

const PORT = process.env.PORT || 5000;
const mongoose = require("mongoose");
const { MONGOURI } = require("./config/keys");

const server = require("http").Server(app);
const io = require("socket.io")(server);
const { ExpressPeerServer } = require("peer");
const peerServer = ExpressPeerServer(server, {
  debug: true
});
const { v4: uuidV4 } = require("uuid");
const { parse: uuidParse } = require("uuid");
const bytes = uuidParse(uuidV4());
// [...bytes].map((v) => v
const roomNo = bytes[2].toString(16).padStart(2, "0");

//models
require("./models/admin");
require("./models/user");
require("./models/student");
require("./models/questions");
require("./models/message");
require("./models/couselling");
require("./models/blogs");

app.use(express.json({ limit: "50mb" }));
app.use("/api", require("./routes/auth"));
app.use("/api", require("./routes/student"));
app.use("/api", require("./routes/questions"));
app.use("/api", require("./routes/admin"));
app.use("/api", require("./routes/blogs"));

//twilio
app.use("/api", require("./routes/verification"));

app.use("/peerjs", peerServer);
app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("Server is runninng on port " + PORT);
});

app.get("/room", (req, res) => {
  res.redirect(`/${roomNo}`);
});

app.get("/:room", (req, res) => {
  res.render("room", { roomId: req.params.room });
});

io.on("connection", (socket) => {
  socket.on("join-room", (roomId, userId) => {
    socket.join(roomId);
    socket.to(roomId).broadcast.emit("user-connected", userId);
    // messages
    socket.on("message", (message) => {
      //send message to the same room
      io.to(roomId).emit("createMessage", message);
    });
    socket.on("disconnect", () => {
      socket.to(roomId).broadcast.emit("user-disconnected", userId);
    });
  });
});

//ilSRqlpJkJKuorJa
mongoose.connect(MONGOURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});

mongoose.connection.on("connected", () => {
  console.log("MongoDB Connected");
});
mongoose.connection.on("error", (err) => {
  console.log("Error Connecting", err);
});

if (process.env.NODE_ENV == "development") {
  app.use(express.static("client/build"));
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

server.listen(PORT, () => {
  console.log("Server is running on port ", PORT);
});
