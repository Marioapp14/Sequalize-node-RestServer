import { Reputacion } from "../models/reputacion.js";

export const getReputaciones = async (req, res) => {
  try {
    const reputacion = await Reputacion.findAll();
    res.json(reputacion);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getRetupacion = async (req, res) => {
  try {
    const { id } = req.params;
    const reputacion = await Reputacion.findOne({
      where: {
        id: id,
      },
    });
    if (!reputacion)
      return res
        .status(404)
        .json({ message: `No existe la reputacion con id ${id}` });
    res.json(reputacion);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const CreateReputacion = async (req, res) => {
  const { id, nombre } = req.body;

  try {
    const newReputacion = await Reputacion.create({
      id,
      nombre,
      
    });

    res.json(newReputacion);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateReputacion = async (req, res) => {
  try {
    const { id } = req.params;

    const reputacion = await Reputacion.findOne({
      where: { id },
    });
    reputacion.set(req.body);
    await reputacion.save();
    return res.json(reputacion);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteReputacion = async (req, res) => {
  try {
    const { id } = req.params;
    await Reputacion.destroy({
      where: {
        id: id,
      },
    });
    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
