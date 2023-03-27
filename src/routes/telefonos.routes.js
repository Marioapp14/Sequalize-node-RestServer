import { Router } from "express";
import {
  getTelefono,
  getTelefonos,
  CreateTelefono,
  deleteTelefono,
  updateTelefono,
} from "../controllers/usuario_telefonos.controller.js";

const router = Router();

router.get("/telefono_Usuario", getTelefonos);
router.post("/telefono_Usuario", CreateTelefono);
router.put("/telefono_Usuario/:id", updateTelefono);
router.delete("/telefono_Usuario/:id", deleteTelefono);
router.get("/telefono_Usuario/:id", getTelefono);

export default router;
