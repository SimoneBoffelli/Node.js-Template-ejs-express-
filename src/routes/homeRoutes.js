import { Router } from "express";
import homeController from "../controllers/homeController.js";

const router = Router();

// Route home
router.get("/", homeController.index);

export default router;
