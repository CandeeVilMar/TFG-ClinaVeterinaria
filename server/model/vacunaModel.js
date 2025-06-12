module.exports = (sequelize, DataTypes) => {
    return sequelize.define("Vacuna", {
      nombre: { type: DataTypes.STRING, allowNull: false },
      tipo_animal: { type: DataTypes.STRING, allowNull: false },
      obligatoria: { type: DataTypes.BOOLEAN, allowNull: false },
      lote: { type: DataTypes.STRING },
      fecha_caducidad: { type: DataTypes.DATEONLY },
      laboratorio: { type: DataTypes.STRING }
    });
  };
  