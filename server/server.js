const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./model/index");

const app = express();

//CORS correctamente configurado ANTES de todo
app.use(cors({
  origin: "http://localhost:4200", // origen de tu frontend
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}));

// ✅ Esto permite respuestas a OPTIONS (preflight)
app.options('*', cors());

// Middleware de logging para debugging
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path}`);
  console.log('Headers:', req.headers);
  console.log('Body raw:', req.body);
  next();
});

// Parseo del body
app.use(bodyParser.json());

// Middleware adicional para verificar el body después del parsing
app.use((req, res, next) => {
  if (req.method === 'POST' && req.path === '/api/mascotas') {
    console.log('Body después del parsing:', req.body);
  }
  next();
});

// Sincronización con DB
db.sequelize.sync()
  .then(() => console.log("Base de datos sincronizada"))
  .catch((err) => console.error("Error al sincronizar la base de datos:", err));

// ✅ Rutas (asegúrate de que estén bien importadas)
app.use("/api/login", require("./routes/loginRoute"));
app.use("/api/clientes", require("./routes/clienteRoute"));
app.use("/api/mascotas", require("./routes/mascotaRoute"));
app.use("/api/veterinarios", require("./routes/veterinarioRoute"));
app.use("/api/clinicas", require("./routes/clinicaRoute"));
app.use("/api/vacunas", require("./routes/vacunaRoute"));
app.use("/api/enfermedades", require("./routes/enfermedadRoute"));
app.use("/api/pruebas", require("./routes/pruebaRoute"));
app.use("/api/tratamientos", require("./routes/tratamientoRoute"));
app.use("/api/consultas", require("./routes/consultaRoute"));
app.use("/api/visitas", require("./routes/visitaRoutes"));

// Ruta no encontrada
app.use((req, res) => {
  res.status(404).json({ error: "Ruta no encontrada" });
});

// Servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
