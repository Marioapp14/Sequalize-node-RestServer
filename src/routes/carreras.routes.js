import { Router } from "express";
import {
  createCarrera,
  getCarreras,
  getCarrera,
  deleteCarrera,
  updateCarrera,
} from "../controllers/carreras.controller.js";
const router = Router();

router.get("/carreras", getCarreras);
router.post("/carreras", createCarrera);
router.put("/carreras/:id", updateCarrera);
router.delete("/carreras/:id", deleteCarrera);
router.get("/carreras/:id", getCarrera);

export default router;
