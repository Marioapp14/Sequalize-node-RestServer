import { DataTypes } from "sequelize";
import { sequalize } from "../database/database.js";


export const TelefonoUsuario = sequalize.define('telefono_usuario',
  {
    id_usuario: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    telefono: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: false,
  }
);



  