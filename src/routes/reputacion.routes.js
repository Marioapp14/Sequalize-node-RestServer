import { Router } from "express";
import {
  CreateReputacion,
  getReputaciones,
  getRetupacion,
  deleteReputacion,
  updateReputacion,
} from "../controllers/reputacion.controller.js";
const router = Router();

router.get("/reputacion", getReputaciones);
router.post("/reputacion", CreateReputacion);
router.put("/reputacion/:id", updateReputacion);
router.delete("/reputacion/:id", deleteReputacion);
router.get("/reputacion/:id", getRetupacion);

export default router;