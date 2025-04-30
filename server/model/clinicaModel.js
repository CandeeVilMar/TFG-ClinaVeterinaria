module.exports = (sequelize, DataTypes) => {
    return sequelize.define("Clinica", {
      nombre: { type: DataTypes.STRING, allowNull: false },
      numero_consultas: { type: DataTypes.INTEGER, allowNull: false },
      numero_veterinarios: { type: DataTypes.INTEGER, allowNull: false },
      numero_acreditacion: { type: DataTypes.STRING, allowNull: false, unique: true }
    });
  };
  