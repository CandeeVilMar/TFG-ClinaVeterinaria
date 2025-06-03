module.exports = (sequelize, DataTypes) => {
  const VisitaVacuna = sequelize.define("VisitaVacuna", {
    dosis: DataTypes.INTEGER,
  });

  return VisitaVacuna;
};
