const { Clinica } = require("../model");

exports.getAll = async (req, res) => {
  const data = await Clinica.findAll();
  res.json(data);
};

exports.getOne = async (req, res) => {
  const data = await Clinica.findByPk(req.params.id);
  res.json(data);
};

exports.create = async (req, res) => {
  const newItem = await Clinica.create(req.body);
  res.status(201).json(newItem);
};

exports.update = async (req, res) => {
  await Clinica.update(req.body, { where: { id: req.params.id } });
  res.sendStatus(204);
};

exports.remove = async (req, res) => {
  await Clinica.destroy({ where: { id: req.params.id } });
  res.sendStatus(204);
};