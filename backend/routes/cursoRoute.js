import express from "express";

import CursoController from "../controllers/cursoController.js";

const router = express.Router();

router.post("/insert", CursoController.insert);

export default router;