import mongoose from "mongoose";

const scooterSchema = new mongoose.Schema(
  {
    model: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    maxSpeed: {
      type: Number,
    },
    range: {
      type: Number,
    },
    pricePerHour: {
      type: Number,
    },
    isElectric: {
      type: Boolean,
    },
    available: {
      type: Boolean,
    },
  },
  { timestamps: true }
);

export default mongoose.model("scooter", scooterSchema);
