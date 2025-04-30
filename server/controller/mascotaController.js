const { Mascota } = require("../model");

exports.getAll = async (req, res) => {
  const data = await Mascota.findAll();
  res.json(data);
};

exports.getOne = async (req, res) => {
  const data = await Mascota.findByPk(req.params.id);
  res.json(data);
};

exports.create = async (req, res) => {
  const newItem = await Mascota.create(req.body);
  res.status(201).json(newItem);
};

exports.update = async (req, res) => {
  await Mascota.update(req.body, { where: { id: req.params.id } });
  res.sendStatus(204);
};

exports.remove = async (req, res) => {
  await Mascota.destroy({ where: { id: req.params.id } });
  res.sendStatus(204);
};