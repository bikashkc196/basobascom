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

export const editRoom = async (req, res) => {
  const { id } = req.params;
  const updates = req.body;

  // Validate that required fields are provided if updating them
  if (updates.title !== undefined && !updates.title) {
    return res.status(400).json({
      success: false,
      message: "Title cannot be empty",
    });
  }

  if (updates.location !== undefined && !updates.location) {
    return res.status(400).json({
      success: false,
      message: "Location cannot be empty",
    });
  }

  try {
    const updatedRoom = await Room.findByIdAndUpdate(id, updates, {
      new: true, // Return the updated document
      runValidators: true, // Run schema validators
    });

    if (!updatedRoom) {
      return res.status(404).json({
        success: false,
        message: "Room not found",
      });
    }

    res.status(200).json({
      success: true,
      data: updatedRoom,
    });
  } catch (error) {
    console.log("Error updating room:", error.message);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};
