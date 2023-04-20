import { Usuarios } from "../models/usuario.js";


export const getUsuarios = async (req, res) => {
  try {
    const usuarios = await Usuarios.findAll();
    res.json(usuarios);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getUsuario = async (req, res) => {
  try {
    const { id } = req.params;
    const usuario = await Usuarios.findOne({
      where: {
        id: id,
      },
    });
    if (!usuario)
      return res
        .status(404)
        .json({ message: `No existe el usuario con id ${id}` });
    res.json(usuario);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const CreateUsuario = async (req, res) => {
  const { codigo, nombre, id_carrera } = req.body;

  try {
    const newUsuario = await Usuarios.create({
      codigo,
      nombre,
      id_carrera,
    });

    res.json(newUsuario);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateUsuario = async (req, res) => {
  try {
    const { id } = req.params;

    const usuario = await Usuarios.findOne({
      where: { id },
    });
    usuario.set(req.body);
    await usuario.save();
    return res.json(usuario);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteUsuario = async (req, res) => {
  try {
    const { id } = req.params;
    await Usuarios.destroy({
      where: {
        id: id,
      },
    });
    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
