// lib/mongo.js
import mongoose from "mongoose";

let isConnected = false;

export async function connectDB() {
  if (isConnected) {
    return mongoose.connection.db;
  }

  try {
    await mongoose.connect(
      `mongodb+srv://salmasaber341:${process.env.MONGO_SECRET}@cluster0.6qerxtp.mongodb.net/todo`,
      {
        dbName: "todo",
      }
    );

    isConnected = true;
    console.log("✅ Connected to MongoDB");
    return mongoose.connection.db;
  } catch (error) {
    console.error("❌ Error connecting to DB:", error);
    throw error;
  }
}
