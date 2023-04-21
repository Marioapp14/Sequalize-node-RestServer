import { Router } from "express";
import { check } from "express-validator";
import { TipoCuenta } from "../models/tipo_cuenta.js";
import { validarCampos } from "../middlewares/validar-campos.js";
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
  [
    check("nombre").custom(async (nombre = "") => {
      const existenombre = await TipoCuenta.findOne({ where: { nombre } });
      if (!existenombre) {
        throw new Error(
          `El Rol ${nombre} no esta registrado en la base de datos`
        );
      }
    }),
    validarCampos,
  ],
  CreateTipoCuenta
);
router.put("/tipocuenta/:id", updateTipoCuenta);
router.delete("/tipocuenta/:id", deleteTipoCuenta);
router.get("/tipocuenta/:id", getTipoCuenta);

export default router;
