import { Router } from "express";
import { check } from "express-validator";
import passport from "passport";

import {
  existeUsuario,
  existeUsuarioPorId,
  encriptarPassword,
  validarPassword,
} from "../helpers/db-validators.js";

import { validarCampos } from "../middlewares/validar-campos.js";
import {
  CreateCuenta,
  getCuentas,
  updateCuenta,
  deleteCuenta,
  getCuenta,
} from "../controllers/cuenta.controller.js";

const router = Router();

router.get("/cuenta/", getCuentas);
router.post(
  "/cuenta",
  [
    check("usuario").custom(existeUsuario),
    check("password", "El password debe ser de al menos 6 caracteres").isLength(
      { min: 6 }
    ),
    check("password","No se puedo encrptar la contraseña").custom(encriptarPassword),
    // check("password", "La contraseña no coincide").custom(validarPassword),
    validarCampos,
  ],
  CreateCuenta
);
router.put(
  "/cuenta/:id",
  [
    check("id", "No es un id valido").isInt({ gt: 0 }),
    check("id").custom(existeUsuarioPorId),
    validarCampos,
  ],
  updateCuenta
);
router.delete(
  "/cuenta/:id",
  [
    check("id", "No es un id valido").isInt({ gt: 0 }),
    check("id").custom(existeUsuarioPorId),
    validarCampos,
  ],
  deleteCuenta
);
router.get(
  "/cuenta/:id",
  [
    check("id", "No es un id valido").isInt({ gt: 0 }),
    check("id").custom(existeUsuarioPorId),
    validarCampos,
  ],
  getCuenta
);

export default router;
