import { DataTypes } from "sequelize";
import { sequalize } from "../database/database.js";
import { Usuarios } from "./usuario.js";

export const Reputacion = sequalize.define('reputacione',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: false,
      allowNull: false,
    },
    nombre: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: false,
  }
);

Reputacion.hasMany(Usuarios, {
    //Un tipo de usuarios tiene muchos Usuarios
    foreignKey: "id_reputacion",
    sourceKey: "id",
  });
  Usuarios.belongsTo(Reputacion, {
    //muchos usuarios tienen un solo tipo de usuario
    foreignKey: "id_reputacion",
    targetId: "id",
  });
