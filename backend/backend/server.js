// entry point for hamro api
import express from "express";
import Room from "./models/room.model.js";

import { connectDB } from "./config/db.js";
import roomRoutes from "./routes/room.route.js";
import authRoutes from "./routes/auth.route.js";
import cors from "cors";
const app = express(); // intialize

app.get("/", (req, res) => {
  res.send("server is ready");
});

app.use(express.json());
app.use(cors());

app.use("/api/rooms", roomRoutes); // routes bolauxa routes le controller ani controller le model
app.use("/api/auth", authRoutes);
app.use("/api/rooms", roomRoutes);

app.listen(5000, () => {
  connectDB();
  console.log("basobasproject server started at http://localhost:5000"); // nodemon halesi
});
