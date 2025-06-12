module.exports = (sequelize, DataTypes) => {
  const VisitaTratamiento = sequelize.define("VisitaTratamiento", {
    dosis: DataTypes.INTEGER,
    fechaSiguiente: Date
  });

  return VisitaTratamiento;
};
