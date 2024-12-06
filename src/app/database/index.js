import mongoose from "mongoose";

export async function connectDB() {
  try {
    const res = await mongoose.connect(process.env.MONGODB_URL);
    // console.log(`MongoDB Connected: ${res.connection.host}`);
  } catch (error) {
    console.error(error);
  }
}
