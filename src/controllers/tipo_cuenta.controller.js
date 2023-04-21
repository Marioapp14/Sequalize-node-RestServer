import { TipoCuenta } from "../models/tipo_cuenta.js";


export const getTipoCuentas = async (req, res) => {
  try {
    const tipocuenta = await TipoCuenta.findAll();
    res.json(tipocuenta);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getTipoCuenta = async (req, res) => {
  try {
    const { id } = req.params;
    const tipocuenta = await TipoCuenta.findOne({
      where: {
        id: id,
      },
    });
    if (!tipocuenta)
      return res
        .status(404)
        .json({ message: `No existe ese tipo de cuenta con id ${id}` });
    res.json(tipocuenta);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const CreateTipoCuenta = async (req, res) => {

  const { nombre, descripcion } = req.body;

  try {
    const newTipoCuenta = await TipoCuenta.create({
      nombre,
      descripcion,
    });

    res.json(newTipoCuenta);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateTipoCuenta = async (req, res) => {
  try {
    const { id } = req.params;

    const tipocuenta = await TipoCuenta.findOne({
      where: { id },
    });
    tipocuenta.set(req.body);
    await tipocuenta.save();
    return res.json(tipocuenta);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteTipoCuenta = async (req, res) => {
  try {
    const { id } = req.params;
    await TipoCuenta.destroy({
      where: {
        id: id,
      },
    });
    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
