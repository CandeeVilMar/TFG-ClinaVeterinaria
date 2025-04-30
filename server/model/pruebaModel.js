module.exports = (sequelize, DataTypes) => {
    return sequelize.define("Prueba", {
      nombre: { type: DataTypes.STRING, allowNull: false },
      cubre_seguro: { type: DataTypes.BOOLEAN, allowNull: false },
      especificaciones: { type: DataTypes.TEXT }
    });
  };
  