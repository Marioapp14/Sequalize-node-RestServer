import { Router } from "express";
import { check } from "express-validator";

import { validarCampos } from "../middlewares/validar-campos.js";
import { rolValido } from "../helpers/db-validators.js";
import {
  CreateTipoCuenta,
  getTipoCuenta,
  updateTipoCuenta,
  deleteTipoCuenta,
  getTipoCuentas,
} from "../controllers/tipo_cuenta.controller.js";

const router = Router();

router.get("/tipocuenta/", getTipoCuentas);
router.post(
  "/tipocuenta",
  [check("nombre").custom(rolValido), validarCampos],
  CreateTipoCuenta
);
router.put("/tipocuenta/:id", updateTipoCuenta);
router.delete("/tipocuenta/:id", deleteTipoCuenta);
router.get("/tipocuenta/:id", getTipoCuenta);

export default router;
