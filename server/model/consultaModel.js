module.exports = (sequelize, DataTypes) => {
    return sequelize.define("Consulta", {
      numero: { type: DataTypes.INTEGER, primaryKey: true },
      especial: { type: DataTypes.BOOLEAN, defaultValue: false }
    });
  };
  