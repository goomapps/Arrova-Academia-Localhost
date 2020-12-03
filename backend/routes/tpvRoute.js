import express from "express";
import tpvController from "../config/tpv.js";

const router = express.Router();

router.post("/insert", tpvController.pago);

export default router;