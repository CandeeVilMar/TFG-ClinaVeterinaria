// controllers/userController.js
const db = require("../model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const Usuario = db.Usuario;
const Cliente = db.Cliente;

exports.login = async (req, res) => {
  const { correo, contrasena } = req.body;

  try {
    const usuario = await Usuario.findOne({ where: { correo } });
    if (!usuario) return res.status(404).json({ error: "Usuario no encontrado" });

    const isValid = await bcrypt.compare(contrasena, usuario.contrasena);
    if (!isValid) return res.status(401).json({ error: "Contraseña incorrecta" });

    const payload = {
      id: usuario.id,
      rol: usuario.rol,
    };

    if (usuario.rol === "cliente") {
      const cliente = await Cliente.findOne({ where: { usuarioId: usuario.id } });
      if (cliente) payload.idCliente = cliente.id;
    }

    const token = jwt.sign(payload, "secreto", { expiresIn: "1h" });
    res.json({ token });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};
