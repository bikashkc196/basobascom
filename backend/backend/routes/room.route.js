import express from "express";
import mongoose from "mongoose";
// import Room from "../models/room.model";
import { postRoom } from "../controllers/room.controller.js";

const router = express.Router();

router.post("/", postRoom);

export default router;
