import express from "express";

import EcnController from "../controllers/ecnController.js";

const router = express.Router();

router.post("/insert", EcnController.insert);

export default router;