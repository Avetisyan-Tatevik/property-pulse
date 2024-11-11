import mongoose from "mongoose";

let connected = false;

export const connectDB = async () => {
  mongoose.set("strictQuery", true);
  //if the database is already connected , don't connect again
  if (connected) return;

  //connect to MangoDB
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      //   useNewUrlParser: true,
      //   useUnifiedTopology: true,
    });
    connected = true;
    console.log("MongoDB connected");
  } catch (error) {
    console.log(error);
  }
};
