import { DataTypes } from "sequelize";
import { sequalize } from "../database/database.js";
import { Cuenta } from "./cuenta.js";
import {TelefonoUsuario} from "./telefono_usuario.js"

export const Usuarios = sequalize.define(
  "usuarios",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      unique: true,
    },
    codigo: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

Usuarios.hasMany(TelefonoUsuario, {
  foreignKey: "id",
  sourceKey: "id",
});

Usuarios.hasMany(Cuenta, {
  foreignKey: "id_usuario",
  sourceKey: "id",
});
