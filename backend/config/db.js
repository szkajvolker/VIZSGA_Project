import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI);
    console.log("Succesfully connected to Database"); // successfully :), `MongoDB Connected: ${connection.connection.host}` jobb megoldás lenne, most nem használod fel a connection változót.
  } catch (error) {
    console.error("Failed to connect Database!");
    process.exit(1);
  }
};
