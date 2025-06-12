const express = require("express");
const bodyParser = require("body-parser");
const db = require("./model/index");

const app = express();
app.use(bodyParser.json());

// Sincroniza modelos con la base de datos
db.sequelize.sync()
  .then(() => {
    console.log("Base de datos sincronizada");
  })
  .catch((err) => {
    console.error("Error al sincronizar la base de datos:", err);
  });

// Ruta de login
app.use("/api/login", require("./routes/loginRoute"));

// Rutas principales
app.use("/api/clientes", require("./routes/clienteRoute"));
app.use("/api/mascotas", require("./routes/mascotaRoute"));
app.use("/api/veterinarios", require("./routes/veterinarioRoute"));
app.use("/api/clinicas", require("./routes/clinicaRoute"));
app.use("/api/vacunas", require("./routes/vacunaRoute"));
app.use("/api/enfermedades", require("./routes/enfermedadRoute"));
app.use("/api/pruebas", require("./routes/pruebaRoute"));
app.use("/api/tratamientos", require("./routes/tratamientoRoute"));
app.use("/api/consultas", require("./routes/consultaRoute"));

// Ruta no encontrada
app.use((req, res) => {
  res.status(404).json({ error: "Ruta no encontrada" });
});

// Servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});

module.exports = app;