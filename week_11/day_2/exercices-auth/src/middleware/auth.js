import jwt from "jsonwebtoken";
import { config } from "dotenv";

config();

export const authenticate = (req, res, next) => {
  const token = req.cookies.apptoken;

  if (!token) {
    return res.status(401).json({ message: "Not authenticated" });
  }

  try {
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    req.user = decoded;
    next();
  } catch {
    res.status(403).json({ message: "Invalid token" });
  }
};

