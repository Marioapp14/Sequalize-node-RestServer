import { DataTypes } from "sequelize";
import { sequalize } from "../database/database.js";
import { Sesion } from "./sessions.js";


export const Cuenta = sequalize.define(
  "cuenta",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    usuario: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    fecha_creacion: {
      type: DataTypes.DATE,
    },
    fecha_actualizacion: {
      type: DataTypes.DATE,
    },
  },
  {
    timestamps: false,
  }
);
Cuenta.hasMany(Sesion, {
  //Una cuenta tiene muchas Sesiones
  foreignKey: "id_cuenta",
  sourceKey: "id",
});

