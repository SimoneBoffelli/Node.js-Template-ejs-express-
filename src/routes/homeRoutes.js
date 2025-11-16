import { Router } from "express";
import homeController from "../controllers/homeController.js";

const router = Router();

router.get("/test-error", (req, res) => {
  throw new Error("Simulated server crash! 🚨");
});

// Route home
router.get("/", homeController.index);

export default router;
