import { Router } from "express";
import { check } from "express-validator";
import { validarCampos } from "../middlewares/validar-campos.js";
import {
  CreateCuenta,
  getCuentas,
  updateCuenta,
  deleteCuenta,
  getCuenta,
} from "../controllers/cuenta.controller.js";

const router = Router();

router.get("/cuentas/", getCuentas);
router.post("/cuentas",[
  check('usuario', 'El usuario no es valido').isEmail(),
  check('password', 'El password debe ser de al menos 6 caracteres').isLength({min: 6}),
  validarCampos
], CreateCuenta);
router.put("/cuentas/:id", updateCuenta);
router.delete("/cuentas/:id", deleteCuenta);
router.get("/cuentas/:id", getCuenta);

export default router;