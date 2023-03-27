import { Router } from "express";
import {
  getTipoUsuarios,
  getTipoUsuario,
  createTipoUsuario,
  deleteTipoUsuario,
  updateTipoUsuario,
} from "../controllers/tipoUsuario.controller.js";
const router = Router();

router.get("/tipo_Usuario", getTipoUsuarios);
router.post("/tipo_Usuario", createTipoUsuario);
router.put("/tipo_Usuario/:id",updateTipoUsuario);
router.delete("/tipo_Usuario/:id",deleteTipoUsuario);
router.get("/tipo_Usuario/:id", getTipoUsuario);

export default router;
