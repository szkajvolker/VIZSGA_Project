import mongoose from "mongoose";
// extra validáció és visszajelzés hiba esetén
const scooterSchema = new mongoose.Schema(
  {
    model: {
      type: String,
      required: true,
      // required: [true, "Model is required"], // Ha nincs name mi legyen a válasz
    },
    brand: {
      type: String,
      required: true,
      // Ha van felesleges space a string előtt vagy mögött akkor azt kitörli.
      // trim: true,
    },
    img: {
      type: String,
      required: true,
    },
    maxSpeed: {
      type: Number,
      //Extra validáció : nem lehet kisebb mint 0
      // min: [0, "Maximum speed cannot be negative"]
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
      // Mivel az available nem required ezért beállíthatunk default értéket neki ha nem kapunk available-t a req.bodyból.
      // default: true
    },
  },
  { timestamps: true }
);

export default mongoose.model("scooter", scooterSchema);
