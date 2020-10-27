import express from "express";

import MatriculaController from "../controllers/matriculaController.js";

const router = express.Router();

router.post("/insert", MatriculaController.insert);

export default router;