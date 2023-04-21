import { DataTypes } from "sequelize";
import { sequalize } from "../database/database.js";

export const Sesion = sequalize.define(
  "session",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      unique: true,
    },
    fecha_creacion: {
      type: DataTypes.DATE,
    },
    fecha_expiracion: {
      type: DataTypes.DATE,
    },
    token: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: false,
  }
);
