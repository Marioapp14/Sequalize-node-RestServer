import express from "express";
import UsuariosRoutes from "./routes/usuarios.routes.js";
import CarreraRoutes from "./routes/carreras.routes.js";
import TelefonoRoutes from "./routes/telefonos.routes.js";
import TipoCuentaRoutes from "./routes/tipocuenta.routes.js";
import CuentaRoutes from "./routes/cuenta.routes.js";
import EstadoCuentaRoutes from "./routes/estadocuenta.routes.js";
import cors from "cors";
import responseTime from "response-time";


const app = express();

//midlewares
app.use(express.json()); //cada vez que se envie un daro en Json el servidor lo va a interpretar y lo guarda dentro de un req.body
app.use(responseTime());
app.use(cors());

app.use(UsuariosRoutes);
app.use(CarreraRoutes);
app.use(TelefonoRoutes);
app.use(TipoCuentaRoutes);
app.use(CuentaRoutes);
// app.use(SessionsRoutes);
app.use(EstadoCuentaRoutes);

export default app;
