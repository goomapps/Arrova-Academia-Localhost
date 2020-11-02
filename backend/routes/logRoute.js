import express from "express";

import LogController from "../controllers/logController.js";

const router = express.Router();

router.post("/insert", LogController.insert);

export default router;