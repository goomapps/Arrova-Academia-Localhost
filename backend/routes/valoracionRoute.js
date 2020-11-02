import express from "express";

import ValoracionController from "../controllers/valoracionController.js";

const router = express.Router();

router.get("/valoraciones", ValoracionController.getAll);
router.post("/insert", ValoracionController.insert);

export default router;
