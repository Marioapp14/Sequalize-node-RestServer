import { TipoCuenta } from "../models/tipo_cuenta.js";
import { Cuenta } from "../models/cuenta.js";
import bcrypt from "bcryptjs";

export const rolValido = async (nombre = "") => {
  const existenombre = await TipoCuenta.findOne({ where: { nombre } });
  if (!existenombre) {
    throw new Error(`El Rol ${nombre} no esta registrado en la base de datos`);
  }
};

export const existeUsuario = async (usuario) => {
  //verificar si el usuario existe
  const existeusuario = await Cuenta.findOne({
    where: { usuario },
  });

  if (existeusuario)
    throw new Error(
      `El usuario ${usuario} ya esta registrado en la base de datos`
    );
};

export const existeUsuarioPorId = async (id) => {
  //verificar si el usuario existe
  const existeusuario = await Cuenta.findByPk(id);

  if (!existeusuario) throw new Error(`El usuario con el id ${id} no existe`);
};

export const encriptarPassword = async (password) => {
  //encriptar la contraseña
  const salt = bcrypt.genSaltSync(10);
  return bcrypt.hashSync(password, salt);
};

export const validarPassword = async (password) => {
  //validar la contraseña
  const validPassword = bcrypt.compareSync(password, Cuenta.password);
  return validPassword;
  if (!validPassword) {
    throw new Error("La contraseña es incorrecta");
  }
};
