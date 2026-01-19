import { registerUser, getUserByEmail, getUsers } from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { config } from "dotenv";

config();

export const register = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Missing fields" });
  }

  try {
    const user = await registerUser(email, password);
    res.status(200).json({
      message: "User registered successfully",
      user,
    });
  } catch (error) {
    if (error.code === "23505") {
      return res.status(409).json({ message: "Email already exists" });
    }
    res.status(500).json({ message: "Internal error" });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await getUserByEmail(email);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const match = await bcrypt.compare(password, user.password);

    if (!match) {
      return res.status(401).json({ message: "Wrong password" });
    }

    const accessToken = jwt.sign(
      { userid: user.id, email: user.email },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "60s" }
    );

    res.cookie("apptoken", accessToken, {
      httpOnly: true,
      maxAge: 60 * 1000,
    });

    res.status(200).json({
      message: "Login successful",
      user: { userid: user.id, email: user.email },
    });
  } catch (error) {
    res.status(500).json({ message: "Internal error" });
  }
};

export const users = async (req, res) => {
  try {
    const users = await getUsers();
    res.json(users);
  } catch {
    res.status(500).json({ message: "Internal error" });
  }
};

export const isAuth = (req, res) => {
  res.sendStatus(200);
};

export const logout = (req, res) => {
  res.clearCookie("apptoken");
  res.sendStatus(200);
};
