const { Enfermedad } = require("../model");

exports.getAll = async (req, res) => {
  const data = await Enfermedad.findAll();
  res.json(data);
};

exports.getOne = async (req, res) => {
  const data = await Enfermedad.findByPk(req.params.id);
  res.json(data);
};

exports.create = async (req, res) => {
  const newItem = await Enfermedad.create(req.body);
  res.status(201).json(newItem);
};

exports.update = async (req, res) => {
  await Enfermedad.update(req.body, { where: { id: req.params.id } });
  res.sendStatus(204);
};

exports.remove = async (req, res) => {
  await Enfermedad.destroy({ where: { id: req.params.id } });
  res.sendStatus(204);
};
