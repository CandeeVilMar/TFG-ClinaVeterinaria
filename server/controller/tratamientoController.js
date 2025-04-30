const { Tratamiento } = require("../model");

exports.getAll = async (req, res) => {
  const data = await Tratamiento.findAll();
  res.json(data);
};

exports.getOne = async (req, res) => {
  const data = await Tratamiento.findByPk(req.params.id);
  res.json(data);
};

exports.create = async (req, res) => {
  const newItem = await Tratamiento.create(req.body);
  res.status(201).json(newItem);
};

exports.update = async (req, res) => {
  await Tratamiento.update(req.body, { where: { id: req.params.id } });
  res.sendStatus(204);
};

exports.remove = async (req, res) => {
  await Tratamiento.destroy({ where: { id: req.params.id } });
  res.sendStatus(204);
};