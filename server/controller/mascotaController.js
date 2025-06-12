const { Mascota } = require("../model");

exports.getAll = async (req, res) => {
  try {
    const data = await Mascota.findAll();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener las mascotas" });
  }
};

exports.getOne = async (req, res) => {
  try {
    const data = await Mascota.findByPk(req.params.id);
    if (!data) {
      return res.status(404).json({ error: "Mascota no encontrada" });
    }
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener la mascota" });
  }
};

exports.create = async (req, res) => {
  try {
    const { nombre, especie, raza, edad, propietario } = req.body;

    if (!nombre || !especie) {
      return res.status(400).json({ error: "Nombre y especie son obligatorios" });
    }

    const newItem = await Mascota.create({
      nombre,
      especie,
      raza: raza || null,
      edad: edad || null,
      propietario: propietario || null,
    });

    res.status(201).json(newItem);
  } catch (error) {
    console.error("Error al crear mascota:", error);
    res.status(500).json({ error: "Error al crear la mascota" });
  }
};

exports.update = async (req, res) => {
  try {
    const { nombre, especie, raza, edad, propietario } = req.body;

    const [updated] = await Mascota.update(
      { nombre, especie, raza, edad, propietario },
      { where: { id: req.params.id } }
    );

    if (!updated) {
      return res.status(404).json({ error: "Mascota no encontrada" });
    }

    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ error: "Error al actualizar la mascota" });
  }
};

exports.remove = async (req, res) => {
  try {
    const deleted = await Mascota.destroy({ where: { id: req.params.id } });
    if (!deleted) {
      return res.status(404).json({ error: "Mascota no encontrada" });
    }
    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar la mascota" });
  }
};
