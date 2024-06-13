import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from 'cors'
import contactRoute from '../backend/routes/contact.route.js'

const app = express();
dotenv.config();

const db = async () => {
  try {
    await mongoose.connect(process.env.mongoose_url);
    console.log("Database Connected")
  } catch (error) {
    console.log(error.message);
  }
};


app.use(express.json())
app.use(cors({origin:["http://localhost:5173"]}))


app.use("/api/contact",contactRoute)

app.listen(8000, () => {
  db()
  console.log("Server is running");
});
