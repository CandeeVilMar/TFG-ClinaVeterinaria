const express = require("express");
const bodyParser = require("body-parser");
const db = require("./model");

const app = express();
app.use(bodyParser.json());

db.sequelize.sync(); // Sincroniza modelos con la base de datos

// Rutas
app.use("/api/clientes", require("./routes/clienteRoute"));
app.use("/api/mascotas", require("./routes/mascotaRoute"));
app.use("/api/veterinarios", require("./routes/veterinarioRoute"));
app.use("/api/clinicas", require("./routes/clinicaRoute"));
app.use("/api/vacunas", require("./routes/vacunaRoute"));
app.use("/api/enfermedades", require("./routes/enfermedadRoute"));
app.use("/api/pruebas", require("./routes/pruebaRoute"));
app.use("/api/tratamientos", require("./routes/tratamientoRoute"));
app.use("/api/consultas", require("./routes/consultaRoute"));

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
