const { Veterinario } = require("../model");

exports.getAll = async (req, res) => {
  const data = await Veterinario.findAll();
  res.json(data);
};

exports.getOne = async (req, res) => {
  const data = await Veterinario.findByPk(req.params.id);
  res.json(data);
};

exports.create = async (req, res) => {
  const newItem = await Veterinario.create(req.body);
  res.status(201).json(newItem);
};

exports.update = async (req, res) => {
  await Veterinario.update(req.body, { where: { id: req.params.id } });
  res.sendStatus(204);
};

exports.remove = async (req, res) => {
  await Veterinario.destroy({ where: { id: req.params.id } });
  res.sendStatus(204);
};
