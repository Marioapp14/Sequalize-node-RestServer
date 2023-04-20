import { Router } from "express";
import {
  CreateCuenta,
  getCuentas,
  updateCuenta,
  deleteCuenta,
  getCuenta,
} from "../controllers/cuenta.controller.js";

const router = Router();

router.get("/cuentas/", getCuentas);
router.post("/cuentas", CreateCuenta);
router.put("/cuentas/:id", updateCuenta);
router.delete("/cuentas/:id", deleteCuenta);
router.get("/cuentas/:id", getCuenta);

export default router;