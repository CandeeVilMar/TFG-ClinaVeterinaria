const bcrypt = require("bcrypt");
const db = require("../model/index");

async function crearAdmin() {
  try {
    const hashedPassword = await bcrypt.hash("admin123", 10);

    await db.Usuario.create({
      correo: "admin@veterinaria.com",
      contrasena: hashedPassword,
      rol: "admin"
    });

    console.log("Usuario administrador creado con éxito");
    console.log("Email: admin@veterinaria.com");
    console.log("Contraseña: admin123");
  } catch (err) {
    console.error("Error al crear administrador:", err);
  }
}

crearAdmin();