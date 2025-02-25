import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const server = createServer(app);

const io = new Server(server, {
  cors: { origin: "*" }, // Allow frontend connections
});

app.use(cors());
app.use(express.json());

io.on("connection", (socket) => {
  console.log("User connected:", socket.id);

  socket.on("sendMessage", ({ message, room }) => {
    io.to(room).emit("receiveMessage", message);
  });

  socket.on("joinRoom", (room) => {
    socket.join(room);
  });

  socket.on("disconnect", () => {const express = require("express");
    const { createServer } = require("http");
    const { Server } = require("socket.io");
    const cors = require("cors");
    const dotenv = require("dotenv");
    
    dotenv.config();
    
    const app = express();
    const server = createServer(app);
    
    const io = new Server(server, {
      cors: { origin: "*" }, // Allow frontend connections
    });
    
    app.use(cors());
    app.use(express.json());
    
    io.on("connection", (socket) => {
      console.log("User connected:", socket.id);
    
      socket.on("sendMessage", ({ message, room }) => {
        io.to(room).emit("receiveMessage", message);
      });
    
      socket.on("joinRoom", (room) => {
        socket.join(room);
      });
    
      socket.on("disconnect", () => {
        console.log("User disconnected:", socket.id);
      });
    });
    
    const PORT = process.env.PORT || 4000;
    server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    
    console.log("User disconnected:", socket.id);
  });
});

const PORT = process.env.PORT || 4000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
