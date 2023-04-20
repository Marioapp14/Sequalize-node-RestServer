import { Router } from "express";
import {
  CreateTipoCuenta,
  getTipoCuenta,
  updateTipoCuenta,
  deleteTipoCuenta,
  getTipoCuentas,
} from "../controllers/tipo_cuenta.controller.js";

const router = Router();

router.get("/tipocuenta/", getTipoCuentas);
router.post("/tipocuenta", CreateTipoCuenta);
router.put("/tipocuenta/:id", updateTipoCuenta);
router.delete("/tipocuenta/:id", deleteTipoCuenta);
router.get("/tipocuenta/:id", getTipoCuenta);

export default router;
