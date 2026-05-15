import mongoose from "mongoose";

const roomSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    // photo: {
    //   type: String,
    //   required: true,
    // },

    roomSize: {
      type: String,
    },

    numberOfRooms: {
      type: Number,
    },

    location: {
      type: String,
      required: true,
    },

    description: {
      type: String,
    },

    // postedBy: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "User",
    //   required: true,
    // },
  },
  {
    timestamps: true,
  },
);

const Room = mongoose.model("Room", roomSchema);

export default Room;
