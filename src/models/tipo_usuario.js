import { DataTypes } from "sequelize";
import { sequalize } from "../database/database.js";
import { Usuarios } from "./usuario.js";

export const TipoUsuario = sequalize.define('tipo_usuario',
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

TipoUsuario.hasMany(Usuarios, {
    //Un tipo de usuarios tiene muchos Usuarios
    foreignKey: "id_tipo_usuario",
    sourceKey: "id",
  });
  
  Usuarios.belongsTo(TipoUsuario, {
    //muchos usuarios tienen un solo tipo de usuario
    foreignKey: "id_tipo_usuario",
    targetId: "id",
  });

  




