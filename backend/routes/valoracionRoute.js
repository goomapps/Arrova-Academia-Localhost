import express from "express";

import ValoracionController from "../controllers/valoracionController.js";

const router = express.Router();

router.get("/getAll", ValoracionController.getAll);
router.post("/insert", ValoracionController.insert);

export default router;