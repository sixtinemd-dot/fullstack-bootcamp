import express from "express";
import {
  register,
  login,
  users,
  logout,
  isAuth
} from "../controllers/authController.js";

import { authenticate } from "../middleware/auth.js";
import { loginLimiter } from "../middleware/rateLimiter.js";

const router = express.Router();

// public routes
router.post("/register", register);
router.post("/login", loginLimiter, login);

// protected routes
router.get("/users", authenticate, users);
router.get("/isauth", authenticate, isAuth);
router.post("/logout", authenticate, logout);

export default router;
