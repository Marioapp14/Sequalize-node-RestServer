import { Cuenta } from "../models/cuenta.js";
import bcrypt from "bcryptjs";
import { Op } from "sequelize";

export const getCuentas = async (req, res) => {
  try {
    const { limite = 5, desde = 0 } = req.query;

    const [cuentas, total] = await Promise.all([
      //Encuentra todos los usuarios, excepto los que estan eliminados, es decir que no estan en el estado 4
      Cuenta.findAll({
        where: {
          id_estado_cuenta: {
            [Op.ne]: 4,
          },
        },
        // offset: Number(desde),
        // limit: Number(limite),
      }),
      Cuenta.count({
        where: {
          id_estado_cuenta: {
            [Op.ne]: 4,
          },
        },
      }),
    ]);
    res.json({ cuentas, total });
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
        id_estado_cuenta: {
          [Op.ne]: 4,
        },
      },
    });

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
    // const cuenta = await Cuenta.destroy({
    //   where: {
    //     id: id,
    //   },
    // });
    // res.json(cuenta);

    const cuenta = await Cuenta.findOne({
      where: { id },
      set: { id_estado_cuenta: 4 },
    });
    cuenta.set({ id_estado_cuenta: 4 });
    await cuenta.save();
    res.json(cuenta);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
