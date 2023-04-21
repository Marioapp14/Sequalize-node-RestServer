import { Cuenta } from "../models/cuenta.js";
import bcrypt from "bcryptjs";

export const getCuentas = async (req, res) => {
  try {
    const { limite = 5, desde = 0 } = req.query;

    const cuenta = await Cuenta.findAll({
      offset: Number(desde),
      limit: Number(limite),
    });
    const total = await Cuenta.count();
    res.json({ cuenta, total });

    // res.json(cuenta);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getCuenta = async (req, res) => {
  try {
    const { id } = req.params;
    const cuenta = await Cuenta.findOne({
      where: {
        id: id,
      },
    });
    if (!cuenta)
      return res
        .status(404)
        .json({ message: `No existe la cuenta con id ${id}` });
    res.json(cuenta);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const CreateCuenta = async (req, res) => {
  const { usuario, password, id_usuario, id_tipo_cuenta, id_estado_cuenta } =
    req.body;

  try {
    const newCuenta = await Cuenta.create({
      usuario,
      password,
      id_usuario,
      id_tipo_cuenta,
      id_estado_cuenta,
    });

    //encriptar la contraseña
    const salt = bcrypt.genSaltSync(10);
    newCuenta.password = bcrypt.hashSync(password, salt);

    //guardar en DB
    await newCuenta.save();

    //excluir la contraseña del objeto que se retorna
    const cuentaJSON = newCuenta.toJSON();
    delete cuentaJSON.password;

    res.json(cuentaJSON);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateCuenta = async (req, res) => {
  try {
    const { id } = req.params;
    const { usuario, password, ...resto } = req.body;

    //Validar contra la base de datos

    if (password) {
      //encriptar la contraseña
      const salt = bcrypt.genSaltSync(10);
      resto.password = bcrypt.hashSync(password, salt);
    }

    const cuenta = await Cuenta.findOne({
      where: { id },
    });

    cuenta.set(req.body);
    await cuenta.save();
    return res.json(cuenta);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteCuenta = async (req, res) => {
  try {
    const { id } = req.params;
    await Cuenta.destroy({
      where: {
        id: id,
      },
    });
    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
