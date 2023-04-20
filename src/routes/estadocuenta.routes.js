import { Router } from "express";
import {
  getEstadoCuenta,
  getEstadoCuentas,
  CreateEstadoCuenta,
  deleteEstadoCuenta,
  updateEstadoCuenta,
} from "../controllers/estado_cuenta.controller.js";

const router = Router();

router.get("/estado_cuenta", getEstadoCuentas);
router.post("/estado_cuenta", CreateEstadoCuenta);
router.put("/estado_cuenta/:id", updateEstadoCuenta);
router.delete("/estado_cuenta/:id", deleteEstadoCuenta);
router.get("/estado_cuenta/:id", getEstadoCuenta);

export default router;
