const bcrypt = require("bcrypt");
const { Cliente } = require("../model");

async function crearCliente() {
  try {
    const hashedPassword = await bcrypt.hash("123456", 10);

    await Cliente.create({
      dni: "12345678A",
      nombre: "Juan Pérez",
      correo: "juan@example.com",
      contrasena: hashedPassword,
      direccion: "Calle Falsa 123",
      telefono: "123456789",
      tipo_seguro: "Básico"
    });

    console.log("Cliente de prueba creado con éxito");
  } catch (err) {
    console.error("Error al crear cliente:", err);
  }
}

crearCliente();
