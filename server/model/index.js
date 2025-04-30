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
db.Mascota = require("./mascotaModel.js")(sequelize, Sequelize);
db.Veterinario = require("./veterinarioModel.js")(sequelize, Sequelize);
db.Consulta = require("./consultaModel.js")(sequelize, Sequelize);
db.Clinica = require("./clinicaModel.js")(sequelize, Sequelize);
db.Cliente = require("./clientModel.js")(sequelize, Sequelize);
db.Enfermedad = require("./enfermedadModel.js")(sequelize, Sequelize);
db.Prueba = require("./pruebaModel.js")(sequelize, Sequelize);
db.Tratamiento = require("./tratamientoModel.js")(sequelize, Sequelize);
db.Vacuna = require("./vacunaModel.js")(sequelize, Sequelize);

// Relaciones

// Cliente - Mascota
Cliente.hasMany(Mascota, { foreignKey: "clienteId" });
Mascota.belongsTo(Cliente, { foreignKey: "clienteId" });

// Mascota - Vacuna (N:M)
Mascota.belongsToMany(Vacuna, { through: "MascotaVacuna" });
Vacuna.belongsToMany(Mascota, { through: "MascotaVacuna" });

// Centro (Clinica) - Veterinario
Clinica.hasMany(Veterinario, { foreignKey: "clinicaId" });
Veterinario.belongsTo(Clinica, { foreignKey: "clinicaId" });

// Veterinario - Consulta
Veterinario.hasMany(Consulta, { foreignKey: "veterinarioDni", sourceKey: "dni" });
Consulta.belongsTo(Veterinario, { foreignKey: "veterinarioDni", targetKey: "dni" });

// Mascota - Enfermedad (N:M)
Mascota.belongsToMany(Enfermedad, { through: "MascotaEnfermedad" });
Enfermedad.belongsToMany(Mascota, { through: "MascotaEnfermedad" });

// Enfermedad - Prueba (N:M)
Enfermedad.belongsToMany(Prueba, { through: "EnfermedadPrueba" });
Prueba.belongsToMany(Enfermedad, { through: "EnfermedadPrueba" });

// Enfermedad - Tratamiento (N:M)
Enfermedad.belongsToMany(Tratamiento, { through: "EnfermedadTratamiento" });
Tratamiento.belongsToMany(Enfermedad, { through: "EnfermedadTratamiento" });

// Consulta - Mascota
Mascota.hasMany(Consulta, { foreignKey: "mascotaId" });
Consulta.belongsTo(Mascota, { foreignKey: "mascotaId" });


module.exports = db;
