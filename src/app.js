import express from "express";
import cors from "cors";
import responseTime from "response-time";
import engine from "ejs-mate";
import { fileURLToPath } from "url";
import path from "path";
import { dirname } from "path";
import morgan from "morgan";
import dotenv from "dotenv";
import passport from "passport";
import session from "express-session";
import flash from "connect-flash";
import UsuariosRoutes from "./routes/usuarios.routes.js";
import CarreraRoutes from "./routes/carreras.routes.js";
import TelefonoRoutes from "./routes/telefonos.routes.js";
import TipoCuentaRoutes from "./routes/tipocuenta.routes.js";
import CuentaRoutes from "./routes/cuenta.routes.js";
import EstadoCuentaRoutes from "./routes/estadocuenta.routes.js";
import indexRouter from "./routes/index.routes.js";

dotenv.config();

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

//settings
app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "views"));
app.engine("ejs", engine);
app.set("view engine", "ejs");

//midlewares
app.use(express.json()); //cada vez que se envie un dato en Json el servidor lo va a interpretar y lo guarda dentro de un req.body
app.use(responseTime());
app.use(cors());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false })); //para que entienda los datos que vienen de un formulario html
app.use(
  session({
    secret: "mySecretSession",
    resave: false,
    saveUninitialized: false,
  })
);
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
import "./passport/local-auth.js";

app.use((req, res, next) => {
  app.locals.signupMessage = req.flash("signupMessage");
  next();
});

//routes
app.use(UsuariosRoutes);
app.use(CarreraRoutes);
app.use(TelefonoRoutes);
app.use(TipoCuentaRoutes);
app.use(CuentaRoutes);
// app.use(SessionsRoutes);
app.use(EstadoCuentaRoutes);
app.use(indexRouter);

export default app;
