import { Router } from "express";
import {
  createCarrera,
  getCarreras,
  getCarrera,
  deleteCarrera,
  updateCarrera,
} from "../controllers/carreras.controller.js";
const router = Router();

router.get("/carrera", getCarreras);
router.post("/carrera", createCarrera);
router.put("/carrera/:id", updateCarrera);
router.delete("/carrera/:id", deleteCarrera);
router.get("/carrera/:id", getCarrera);

export default router;
