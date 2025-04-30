module.exports = (sequelize, DataTypes) => {
    return sequelize.define("Cliente", {
      nombre: { type: DataTypes.STRING, allowNull: false },
      dni: { type: DataTypes.STRING, allowNull: false, unique: true },
      telefono: { type: DataTypes.STRING, allowNull: false },
      correo: { type: DataTypes.STRING, allowNull: false, unique: true },
      contrasena: { type: DataTypes.STRING, allowNull: false },
      tipo_seguro: { type: DataTypes.STRING, allowNull: false }
    });
  };
  