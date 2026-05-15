import express from "express";
import mongoose from "mongoose";
// import Room from "../models/room.model";
import { postRoom, editRoom } from "../controllers/room.controller.js";

const router = express.Router();

router.post("/", postRoom);
router.put("/edit/:id", editRoom);

export default router;
