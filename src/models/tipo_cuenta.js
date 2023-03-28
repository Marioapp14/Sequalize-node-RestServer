import { DataTypes } from "sequelize";
import { sequalize } from "../database/database.js";
import { Cuenta } from "./cuenta.js";

export const TipoCuenta = sequalize.define(
  "tipo_cuenta",
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
    descripcion: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: false,
  }
);
TipoCuenta.hasMany(Cuenta, {
  //Un tipo de cuenta tiene muchas Cuentas
  foreignKey: "id_tipo_cuenta",
  sourceKey: "id",
});

Cuenta.belongsTo(TipoCuenta, {
  //muchos Cuentas tienen un solo tipo de Cuenta
  foreignKey: "id_tipo_cuenta",
  targetId: "id",
});
