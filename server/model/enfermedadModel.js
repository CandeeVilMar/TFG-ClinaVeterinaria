module.exports = (sequelize, DataTypes) => {
    return sequelize.define("Enfermedad", {
      nombre: { type: DataTypes.STRING, allowNull: false },
      tipo: { type: DataTypes.STRING, allowNull: false },
      mortal: { type: DataTypes.BOOLEAN, defaultValue: false }
    });
  };
  