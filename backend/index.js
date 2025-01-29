import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

import routes from "./routes/routes.js";
import connectToDB from "./config/database.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;



app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
    maxAge: 14400,
  })
);

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Your server is up and running...",
  });
});

app.use("/api/v1/", routes);

// Activate server
app.listen(PORT, () => {
  connectToDB();
  console.log(`App is running on port ${PORT}`);
});
