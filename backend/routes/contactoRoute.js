import express from "express";

import ContactoController from "../controllers/contactoController.js";

const router = express.Router();

router.post("/insert", ContactoController.insert);

export default router;