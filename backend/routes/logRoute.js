import express from "express";

import LogController from "../controllers/logController.js";

const router = express.Router();

router.get("/getAll", LogController.getAll);
router.post("/insert", LogController.insert);

export default router;