import { DataTypes } from "sequelize";
import { sequalize } from "../database/database.js";
import { Sesion } from "./sessions.js";
import bcrypt from "bcryptjs";


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
    toJSON: {
      // Excluimos la propiedad "password" del objeto JSON
      exclude: ['password']
    }
  }, 
);

Cuenta.prototype.encriptarPassword = function(password){
  //encriptar la contraseña
  const salt = bcrypt.genSaltSync(10);
  return bcrypt.hashSync(password, salt);
};

Cuenta.prototype.validarPassword = function(password){
  //validar la contraseña
  const validPassword = bcrypt.compareSync(password, this.password);
  return validPassword;
  if (!validPassword) {
    throw new Error("La contraseña es incorrecta");
  }
};


Cuenta.hasMany(Sesion, {
  //Una cuenta tiene muchas Sesiones
  foreignKey: "id_cuenta",
  sourceKey: "id",
});
