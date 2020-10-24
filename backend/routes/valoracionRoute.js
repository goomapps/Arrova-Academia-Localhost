import express from "express";

import ValoracionController from "../controllers/valoracionController.js";

const router = express.Router();

router.post("/insert", ValoracionController.insert);

export default router;