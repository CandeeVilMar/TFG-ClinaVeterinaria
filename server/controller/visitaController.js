const { Visita, Vacuna, Tratamiento } = require("../models");

exports.getAll = async (req, res) => {
  const data = await Visita.findAll({
    include: [Vacuna, Tratamiento],
  });
  res.json(data);
};

exports.getOne = async (req, res) => {
  const data = await Visita.findByPk(req.params.id, {
    include: [Vacuna, Tratamiento],
  });
  res.json(data);
};

exports.create = async (req, res) => {
  const { fecha, paciente, vacunas, tratamientos } = req.body;

  const visita = await Visita.create({ fecha, paciente });

  if (vacunas) {
    for (let v of vacunas) {
      await visita.addVacuna(v.id, { through: { dosis: v.dosis } });
    }
  }

  if (tratamientos) {
    for (let t of tratamientos) {
      await visita.addTratamiento(t.id, { through: { dosis: t.dosis } });
    }
  }

  res.status(201).json(visita);
};

exports.update = async (req, res) => {
  const { fecha, paciente, vacunas, tratamientos } = req.body;
  const visita = await Visita.findByPk(req.params.id);

  await visita.update({ fecha, paciente });

  if (vacunas) {
    await visita.setVacunas([]);
    for (let v of vacunas) {
      await visita.addVacuna(v.id, { through: { dosis: v.dosis } });
    }
  }

  if (tratamientos) {
    await visita.setTratamientos([]);
    for (let t of tratamientos) {
      await visita.addTratamiento(t.id, { through: { dosis: t.dosis } });
    }
  }

  res.sendStatus(204);
};

exports.remove = async (req, res) => {
  await Visita.destroy({ where: { id: req.params.id } });
  res.sendStatus(204);
};
