const Sequelize = require("sequelize");
const dbConfig = require("../config/db.js");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Importación de modelos
db.Usuario = require("./userModel.js")(sequelize, Sequelize);
db.Cliente = require("./clientModel.js")(sequelize, Sequelize);
db.Mascota = require("./mascotaModel.js")(sequelize, Sequelize);
db.Veterinario = require("./veterinarioModel.js")(sequelize, Sequelize);
db.Consulta = require("./consultaModel.js")(sequelize, Sequelize);
db.Clinica = require("./clinicaModel.js")(sequelize, Sequelize);
db.Enfermedad = require("./enfermedadModel.js")(sequelize, Sequelize);
db.Prueba = require("./pruebaModel.js")(sequelize, Sequelize);
db.Tratamiento = require("./tratamientoModel.js")(sequelize, Sequelize);
db.Vacuna = require("./vacunaModel.js")(sequelize, Sequelize);

// Relaciones

// Usuario - Cliente (1:1)
db.Usuario.hasOne(db.Cliente, { foreignKey: "usuarioId" });
db.Cliente.belongsTo(db.Usuario, { foreignKey: "usuarioId" });

// Cliente - Mascota
db.Cliente.hasMany(db.Mascota, { foreignKey: "clienteId" });
db.Mascota.belongsTo(db.Cliente, { foreignKey: "clienteId" });

// Mascota - Vacuna (N:M)
db.Mascota.belongsToMany(db.Vacuna, { through: "MascotaVacuna" });
db.Vacuna.belongsToMany(db.Mascota, { through: "MascotaVacuna" });

// Centro (Clinica) - Veterinario
db.Clinica.hasMany(db.Veterinario, { foreignKey: "clinicaId" });
db.Veterinario.belongsTo(db.Clinica, { foreignKey: "clinicaId" });

// Veterinario - Consulta
db.Veterinario.hasMany(db.Consulta, { foreignKey: "veterinarioDni", sourceKey: "dni" });
db.Consulta.belongsTo(db.Veterinario, { foreignKey: "veterinarioDni", targetKey: "dni" });

// Mascota - Enfermedad (N:M)
db.Mascota.belongsToMany(db.Enfermedad, { through: "MascotaEnfermedad" });
db.Enfermedad.belongsToMany(db.Mascota, { through: "MascotaEnfermedad" });

// Enfermedad - Prueba (N:M)
db.Enfermedad.belongsToMany(db.Prueba, { through: "EnfermedadPrueba" });
db.Prueba.belongsToMany(db.Enfermedad, { through: "EnfermedadPrueba" });

// Enfermedad - Tratamiento (N:M)
db.Enfermedad.belongsToMany(db.Tratamiento, { through: "EnfermedadTratamiento" });
db.Tratamiento.belongsToMany(db.Enfermedad, { through: "EnfermedadTratamiento" });

// Consulta - Mascota
db.Mascota.hasMany(db.Consulta, { foreignKey: "mascotaId" });
db.Consulta.belongsTo(db.Mascota, { foreignKey: "mascotaId" });

module.exports = db;
