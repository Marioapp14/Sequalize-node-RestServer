import express from "express";
import Routes from "./routes/projects.routes.js";
import TiposRoutes from "./routes/tiposUsuarios.routes.js";
import CarreraRoutes from "./routes/carreras.routes.js";
import ReputacionRoutes from "./routes/reputacion.routes.js";
import TelefonoRoutes from "./routes/telefonos.routes.js";

const app = express();

//midlewares
app.use(express.json()); //cada vez que se envie un daro en Json el servidor lo va a interpretar y lo guarda dentro de un req.body

app.use(Routes);
app.use(TiposRoutes);
app.use(CarreraRoutes);
app.use(ReputacionRoutes);
app.use(TelefonoRoutes);
export default app;
