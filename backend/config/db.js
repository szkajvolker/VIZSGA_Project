import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI);
    console.log("Succesfully connected to Database");
  } catch (error) {
    console.error("Failed to connect Database!");
    process.exit(1);
  }
};
