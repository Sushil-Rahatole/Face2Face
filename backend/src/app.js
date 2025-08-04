import express from "express";
import { createServer } from "node:http";

import { Server } from "socket.io";

import mongoose from "mongoose";
import {connectToSocket} from "./controllers/SocketManager.js"

import cors from "cors";
import userRoutes from "./routes/user.routes.js"

const app = express();
const server = createServer(app);
const io = connectToSocket(server);

app.set("port",(process.env.PORT || 8000));
app.use(cors());
app.use(express.json({limit:"40kb"}));
app.use(express.urlencoded({limmit:"40kb",extended:true}));

app.use("/api/v1/users",userRoutes);


const start = async()=>{
    const connectiondb = await mongoose.connect("mongodb+srv://sushilrahatole:LksmQjBsfYjjfL2O@cluster0.dvsn4tt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    console.log(`MONGO connected DB Host: ${connectiondb.connection.host}`)
    server.listen(app.get("port"), ()=>{
        console.log("Listening on port 8000")
    })
}
start();