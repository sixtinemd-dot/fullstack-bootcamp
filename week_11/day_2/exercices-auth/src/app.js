import express from "express";
import cookieParser from "cookie-parser";
import { config } from "dotenv";
import authRoutes from "./routes/auth.js";

config();

const app = express();

app.use(express.json());      // allows reading JSON body
app.use(cookieParser());      // allows reading cookies

app.use("/auth", authRoutes); // routes start with /auth

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
