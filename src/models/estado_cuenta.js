import { DataTypes } from "sequelize";
import { sequalize } from "../database/database.js";
import {Cuenta} from "./cuenta.js"


export const EstadoCuenta = sequalize.define('estado_cuenta',
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
    descripcion:{
        type: DataTypes.STRING,
    }
  },
  {
    timestamps: false,
  }
);

EstadoCuenta.hasMany(Cuenta, {
    //Un tipo de cuenta tiene muchas Cuentas
    foreignKey: "id_estado_cuenta",
    sourceKey: "id",
  });

Cuenta.belongsTo(EstadoCuenta, {
    //muchos Cuentas tienen un solo tipo de Cuenta
    foreignKey: "id_estado_cuenta",
    targetId: "id",
  });
