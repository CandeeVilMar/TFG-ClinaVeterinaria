module.exports = (sequelize, DataTypes) => {
    return sequelize.define("Mascota", {
      nombre: { type: DataTypes.STRING, allowNull: false },
      fecha_nacimiento: { type: DataTypes.DATEONLY, allowNull: false },
      raza: { type: DataTypes.STRING, allowNull: false },
      tipo: { type: DataTypes.STRING, allowNull: false },
      peso: { type: DataTypes.FLOAT, allowNull: false }
    });
  };
  