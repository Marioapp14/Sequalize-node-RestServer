import { EstadoCuenta } from "../models/tipo_cuenta.js";

export const getEstadoCuentas = async (req, res) => {
  try {
    const estadocuenta = await EstadoCuenta.findAll();
    res.json(estadocuenta);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getEstadoCuenta = async (req, res) => {
  try {
    const { id } = req.params;
    const estadocuenta = await EstadoCuenta.findOne({
      where: {
        id: id,
      },
    });
    if (!estadocuenta)
      return res
        .status(404)
        .json({ message: `No existe ese tipo de cuenta con id ${id}` });
    res.json(estadocuenta);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const CreateEstadoCuenta= async (req, res) => {
  const { nombre, descripcion } = req.body;

  try {
    const newestadoCuenta = await EstadoCuenta.create({
      nombre,
      descripcion,
    });

    res.json(newestadoCuenta);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateEstadoCuenta = async (req, res) => {
  try {
    const { id } = req.params;

    const estadocuenta = await EstadoCuenta.findOne({
      where: { id },
    });
    estadocuenta.set(req.body);
    await estadocuenta.save();
    return res.json(estadocuenta);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteTipoCuenta = async (req, res) => {
  try {
    const { id } = req.params;
    await EstadoCuenta.destroy({
      where: {
        id: id,
      },
    });
    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
