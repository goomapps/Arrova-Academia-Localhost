import express from "express";

// import { auth } from "backend/middlewares/auth.js";

import UserController from "../controllers/userController.js";

const router = express.Router();

router.post("/registro", UserController.registro);
router.post("/login", UserController.login);
router.get("/logout", UserController.logout);
router.get("/perfil", UserController.perfil);
router.get("/usuarios", UserController.getAll);

export default router;
