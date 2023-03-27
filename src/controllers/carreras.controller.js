import { Carrera } from "../models/carrera.js";

export const getCarreras = async (req, res) => {
  try {
    const carrera = await Carrera.findAll();
    res.json(carrera);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getCarrera = async (req, res) => {
  try {
    const { id } = req.params;
    const carrera = await Carrera.findOne({
      where: {
        id: id,
      },
    });
    if (!carrera)
      return res
        .status(404)
        .json({ message: `No existe el tipo de usuario con id ${id}` });
    res.json(carrera);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createCarrera = async (req, res) => {
  const { id, nombre } = req.body;

  try {
    const newCarrera = await Carrera.create({
      id,
      nombre,
    });

    res.json(newCarrera);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateCarrera = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre } = req.body;

    const carrera = await Carrera.findByPk(id);
    carrera.id = id;
    carrera.nombre = nombre;

    await carrera.save();

    return res.json(carrera);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteCarrera = async (req, res) => {
  try {
    const { id } = req.params;
    const carrera = await Carrera.destroy({
      where: {
        id: id,
      },
    });
    console.log(`Obejto: ${carrera} eliminado`);
    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
