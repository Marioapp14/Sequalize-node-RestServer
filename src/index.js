import app from "./app.js";
import { sequalize } from "./database/database.js";
import "./models/usuario.js";
import "./models/carrera.js";
import "./models/telefono_usuario.js";
import "./models/estado_cuenta.js";
import "./models/tipo_cuenta.js";
import "./models/sessions.js";
import "./models/cuenta.js";

async function main() {
  const port = process.env.PORT || 3000;
  try {
    sequalize.sync({force: true}); //Hace la conexion con la base de datos
    app.listen(port);
    console.log("Server is listening on port ", port);
  } catch (error) {
    console.log("Unable to connect to the database");
  }
}

main();


