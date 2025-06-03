module.exports = (sequelize, DataTypes) => {
  const Visita = sequelize.define("Visita", {
    fecha: DataTypes.DATE,
    paciente: DataTypes.STRING,
  });

  Visita.associate = models => {
    Visita.belongsToMany(models.Vacuna, {
      through: models.VisitaVacuna,
    });

    Visita.belongsToMany(models.Tratamiento, {
      through: models.VisitaTratamiento,
    });
  };

  return Visita;
};
