import { DataTypes } from "sequelize";
import { sequalize } from "../database/database.js";



export const Usuarios= sequalize.define("usuarios", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  codigo:{
    type: DataTypes.STRING,
    allowNull: false,
  },
  nombre:{
    type: DataTypes.STRING,
    allowNull: false,
  }
},{
    timestamps: false
});
