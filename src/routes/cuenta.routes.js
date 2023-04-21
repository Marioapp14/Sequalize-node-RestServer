import { Router } from "express";
import { check } from "express-validator";

import { existeUsuario, existeUsuarioPorId } from "../helpers/db-validators.js";

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
router.post(
  "/cuentas",
  [
    check("usuario").custom(existeUsuario),
    check("password", "El password debe ser de al menos 6 caracteres").isLength(
      { min: 6 }
    ),
    validarCampos,
  ],
  CreateCuenta
);
router.put(
  "/cuentas/:id",
  [
    check("id", "No es un id valido").isInt({ gt: 0 }),
    check("id").custom(existeUsuarioPorId),
    validarCampos,
  ],
  updateCuenta
);
router.delete("/cuentas/:id", deleteCuenta);
router.get(
  "/cuentas/:id",
  [
    check("id", "No es un id valido").isInt({ gt: 0 }),
    check("id").custom(existeUsuarioPorId),
    validarCampos,
  ],
  getCuenta
);

export default router;
