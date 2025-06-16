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
    console.log("Datos recibidos:", req.body);
    const { nombre, fecha_nacimiento, raza, tipo, peso } = req.body;
    console.log("Campos extraídos:", { nombre, fecha_nacimiento, raza, tipo, peso });

    if (!nombre || !fecha_nacimiento || !raza || !tipo || !peso) {
      console.log("Validación fallida - campos faltantes:", {
        nombre: !nombre,
        fecha_nacimiento: !fecha_nacimiento,
        raza: !raza,
        tipo: !tipo,
        peso: !peso
      });
      return res.status(400).json({ error: "Todos los campos son obligatorios: nombre, fecha_nacimiento, raza, tipo, peso" });
    }

    const newItem = await Mascota.create({
      nombre,
      fecha_nacimiento,
      raza,
      tipo,
      peso
    });

    res.status(201).json(newItem);
  } catch (error) {
    console.error("Error al crear mascota:", error);
    res.status(500).json({ error: "Error al crear la mascota" });
  }
};

exports.update = async (req, res) => {
  try {
    const { nombre, fecha_nacimiento, raza, tipo, peso } = req.body;

    const [updated] = await Mascota.update(
      { nombre, fecha_nacimiento, raza, tipo, peso },
      { where: { id: req.params.id } }
    );

    if (!updated) {
      return res.status(404).json({ error: "Mascota no encontrada" });
    }

    res.sendStatus(204);
  } catch (error) {
    console.error("Error al actualizar mascota:", error);
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
