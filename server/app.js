const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors());

const PORT = process.env.PORT || 5000;
const mongoose = require("mongoose");
const { MONGOURL } = require("./config/keys");

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

//ilSRqlpJkJKuorJa
mongoose.connect(MONGOURL, {
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

app.listen(PORT, () => {
  console.log("Server is running on port ", PORT);
});
