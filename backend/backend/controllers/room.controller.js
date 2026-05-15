import Room from "../models/room.model.js";
export const postRoom = async (req, res) => {
  const room = req.body;

  // if else empty herna
  if (!room.title || !room.location) {
    return res.status(400).json({
      success: false,
      message: "Please provide all required fields",
    });
  }

  // empty na vayesi intialize
  const newRoom = new Room(room);

  try {
    await newRoom.save(); // saving tp database
    res.status(201).json({
      success: true,
      data: newRoom,
    });
  } catch (error) {
    console.log("Error creating room:", error.message);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};
