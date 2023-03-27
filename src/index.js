import app from "./app.js";
import { sequalize } from "./database/database.js";
import "./models/usuario.js";
import "./models/carrera.js";
import "./models/tipo_usuario.js";
import "./models/reputacion.js";

async function main() {
  try {
    await sequalize.sync(); //Hace una sincronizacion con la base de datos
    console.log("Connection has been established successfuly");

    app.listen(3000);
    console.log("Server is listening on port ", 3000);
  } catch (error) {
    console.log("Unable to connect to the database");
  }
}



main();
