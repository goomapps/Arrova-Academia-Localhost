import express from "express";

import CursoController from "../controllers/cursoController";

const router = express.Router();

router.post("/insert", CursoController.insert);

export default router;