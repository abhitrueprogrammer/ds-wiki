import mongoose from "mongoose";

if (!process.env.MONGODB_URI) {
  throw new Error("Please add your Mongo URI to .env.local");
}

const uri = process.env.MONGODB_URI;

let isConnected = false;

export const connectToDatabase = async () => {
  if (isConnected) {
    console.log("DATABASE CONNECTED: ");
    return;
  }

  if (mongoose.connection.readyState === mongoose.ConnectionStates.connected) {
    isConnected = true;
    console.log("DATABASE CONNECTED: ");

    return;
  }

  try {
    await mongoose.connect(uri);
    isConnected = true;
    console.log("DATABASE CONNECTED: ");

  } catch (error) {
    if(error)
        
    throw new Error("Failed to connect to MongoDB");
  }
};
