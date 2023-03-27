import { TipoUsuario } from "../models/tipo_usuario.js";

export const getTipoUsuarios = async (req, res) => {
  try {
    const tipoUsuario = await TipoUsuario.findAll();
    res.json(tipoUsuario);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getTipoUsuario = async (req, res) => {
  try {
    const { id } = req.params;
    const tipoUsuario = await TipoUsuario.findOne({
      where: {
        id: id,
      },
    });
    if (!tipoUsuario)
      return res
        .status(404)
        .json({ message: `No existe el tipo de usuario con id ${id}` });
    res.json(tipoUsuario);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createTipoUsuario = async (req, res) => {
  const { id, nombre } = req.body;

  try {
    const newTipoUsario = await TipoUsuario.create({
      id,
      nombre,
    });

    res.json(newTipoUsario);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateTipoUsuario = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre } = req.body;

    const tipoUsuario = await TipoUsuario.findByPk(id);
    tipoUsuario.id = id;
    tipoUsuario.nombre = nombre;
 
    await tipoUsuario.save();

    return res.json(tipoUsuario);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteTipoUsuario = async (req, res) => {
  try {
    const { id } = req.params;
    const tipoUsuario = await TipoUsuario.destroy({
      where: {
        id: id,
      },
    });
    console.log(`Obejto: ${tipoUsuario} eliminado`);
    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
