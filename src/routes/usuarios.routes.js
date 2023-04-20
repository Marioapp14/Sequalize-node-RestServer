import { Router } from "express";
import {
  CreateUsuario,
  getUsuarios,
  updateUsuario,
  deleteUsuario,
  getUsuario,
} from "../controllers/usuarios.controller.js";
const router = Router();

router.get("/usuarios/", getUsuarios);
router.post("/usuarios", CreateUsuario);
router.put("/usuarios/:id", updateUsuario);
router.delete("/usuarios/:id", deleteUsuario);
router.get("/usuarios/:id",getUsuario);

export default router;
