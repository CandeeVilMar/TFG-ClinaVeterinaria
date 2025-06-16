const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { Cliente, Usuario } = require("../model");

router.post("/", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Primero buscar en la tabla de Usuarios (admin)
    let usuario = await Usuario.findOne({ where: { correo: email } });
    
    if (usuario && (await bcrypt.compare(password, usuario.contrasena))) {
      const token = jwt.sign({ id: usuario.id, rol: usuario.rol }, "secreto", { expiresIn: "1h" });
      return res.json({ token, rol: usuario.rol });
    }

    // Si no se encuentra en Usuarios, buscar en Clientes
    const cliente = await Cliente.findOne({ where: { correo: email } });
    
    if (cliente && (await bcrypt.compare(password, cliente.contrasena))) {
      const token = jwt.sign({ id: cliente.id, rol: 'cliente' }, "secreto", { expiresIn: "1h" });
      return res.json({ token, rol: 'cliente' });
    }

    // Si no se encuentra en ninguna tabla
    return res.status(401).json({ message: "Credenciales inválidas" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error interno del servidor" });
  }
});

module.exports = router;
