module.exports = (sequelize, DataTypes) => {
    return sequelize.define("Tratamiento", {
      nombre: { type: DataTypes.STRING, allowNull: false },
      cubre_seguro: { type: DataTypes.BOOLEAN, allowNull: false },
      duracion: { type: DataTypes.STRING },
      forma_administracion: { type: DataTypes.STRING }
    });
  };
  