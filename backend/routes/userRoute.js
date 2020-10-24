import express from "express";

import { auth } from "../middlewares/auth.js";

import UserController from "../controllers/userController.js";

const router = express.Router();

router.post("/register", UserController.register);
router.post("/login", UserController.login);
router.get("/logout", auth, UserController.logout);
router.get("/profile", UserController.profile);

export default router;
