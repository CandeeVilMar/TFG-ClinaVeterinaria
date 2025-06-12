const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { Cliente } = require("../model");

router.post("/", async (req, res) => {
  const { email, password } = req.body;

  try {
    const cliente = await Cliente.findOne({ where: { email } });

    if (!cliente || !(await bcrypt.compare(password, cliente.password))) {
      return res.status(401).json({ message: "Credenciales inválidas" });
    }

    const token = jwt.sign({ id: cliente.id }, "secreto", { expiresIn: "1h" });
    res.json({ token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error interno del servidor" });
  }
});

module.exports = router;
