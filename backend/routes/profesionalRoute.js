import express from "express";

import ProfesionalController from "../controllers/profesionalController.js";

const router = express.Router();

router.post("/insert", ProfesionalController.insert);

export default router;
