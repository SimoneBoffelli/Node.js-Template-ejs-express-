import { Router } from "express";
import dbController from "../controllers/dbController.js";

const router = Router();

// Rotta test DB
router.get("/dbcheck", dbController.check);

export default router;
