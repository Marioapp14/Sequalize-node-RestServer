import { TelefonoUsuario } from "../models/telefono_usuario.js";


export const getTelefonos = async (req, res) => {
  try {
    const telefonos = await TelefonoUsuario.findAll();
    res.json(telefonos);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getTelefono = async (req, res) => {
  try {
    const { id } = req.params;
    const telefono = await TelefonoUsuario.findOne({
      where: {
        id: id,
      },
    });
    if (!telefono)
      return res
        .status(404)
        .json({ message: `No existe el usuario con id ${id}`});
    res.json(telefono);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const CreateTelefono = async (req, res) => {
  const { id, telefono } = req.body;

  try {
    const newTelefono = await TelefonoUsuario.create({
      id,
      telefono,
    });

    res.json(newTelefono);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateTelefono = async (req, res) => {
  try {
    const { id } = req.params;

    const telefono = await TelefonoUsuario.findOne({
      where: { id },
    });
    telefono.set(req.body);
    await telefono.save();
    return res.json(telefono);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteTelefono = async (req, res) => {
  try {
    const { id } = req.params;
    await TelefonoUsuario.destroy({
      where: {
        id: id,
      },
    });
    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};