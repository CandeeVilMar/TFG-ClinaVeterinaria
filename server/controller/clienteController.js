const { Cliente } = require("../model");

exports.getAll = async (req, res) => {
  const data = await Cliente.findAll();
  res.json(data);
};

exports.getOne = async (req, res) => {
  const data = await Cliente.findByPk(req.params.id);
  res.json(data);
};

exports.create = async (req, res) => {
  const newItem = await Cliente.create(req.body);
  res.status(201).json(newItem);
};

exports.update = async (req, res) => {
  await Cliente.update(req.body, { where: { id: req.params.id } });
  res.sendStatus(204);
};

exports.remove = async (req, res) => {
  await Cliente.destroy({ where: { id: req.params.id } });
  res.sendStatus(204);
};