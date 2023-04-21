import { DataTypes } from "sequelize";
import { sequalize } from "../database/database.js";
import { Usuarios } from "./usuario.js";

export const Carrera = sequalize.define(
  "carrera",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
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

Carrera.hasMany(Usuarios, {
  //Una carrera tiene muchos Usuarios
  foreignKey: "id_carrera",
  sourceKey: "id",
});

Usuarios.belongsTo(Carrera, {
  //muchos usuarios tienen una sola carrera
  foreignKey: "id_carrera",
  targetId: "id",
});
