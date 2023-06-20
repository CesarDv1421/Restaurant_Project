import express from "express";
import { Server as SocketServer } from "socket.io";
import http from "http";
import cors from "cors";
import "dotenv/config";
const app = express();

const server = http.createServer(app);

const io = new SocketServer(server, {
  cors: {
    origin: "*", //Permitir peticiones de cualquier parte
  },
});

app.use(cors());
app.use(express.json());

io.on("connection", (socket) => {
  socket.on("message", (msg) => {
    socket.broadcast.emit("message", {
      body: msg.body,
      user: msg.user,
      //from: socket.id.slice(6) //id de cada usuario
    });
  });
});

//Routes
import menu from "./routes/menu.routes.js";
import auth from "./routes/auth.routes.js";
import isAuthenticated from "./middleware/isAuthenticated.js";

app.use("/auth", auth);
app.use(isAuthenticated);
app.use("/", menu);

server.listen(3000, () => console.log("Listen in PORT 3000"));
