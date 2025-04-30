module.exports = (sequelize, DataTypes) => {
    return sequelize.define("Veterinario", {
      nombre: { type: DataTypes.STRING, allowNull: false },
      dni: { type: DataTypes.STRING, allowNull: false, unique: true },
      especialista: { type: DataTypes.BOOLEAN, defaultValue: false }
    });
  };
  