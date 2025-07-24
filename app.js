import express from "express";
import { router } from "./router/route.js";
import { connectDB } from "./connect/connect.js";
import dotenv from "dotenv/config";
import cors from "cors";

const PORT = 8000;

const app = express();

// middleware
app.use(cors())  // enable cors for all origins
app.use(express.json());  // turns all incoming json into js object that we can use
app.use(express.static("./public"));  // serves all static files in public folder


app.use("/api/journal", router);


const start = async () => {

    try {
        
        await connectDB(process.env.MONGO_URI);
        app.listen(PORT, () => console.log(`Connected on port: ${PORT}...`));

    } catch (error) {
        console.log(error);
    }
}

start();