const { Consulta } = require("../model");

exports.getAll = async (req, res) => {
  const data = await Consulta.findAll();
  res.json(data);
};

exports.getOne = async (req, res) => {
  const data = await Consulta.findByPk(req.params.id);
  res.json(data);
};

exports.create = async (req, res) => {
  const newItem = await Consulta.create(req.body);
  res.status(201).json(newItem);
};

exports.update = async (req, res) => {
  await Consulta.update(req.body, { where: { id: req.params.id } });
  res.sendStatus(204);
};

exports.remove = async (req, res) => {
  await Consulta.destroy({ where: { id: req.params.id } });
  res.sendStatus(204);
};