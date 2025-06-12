module.exports = (sequelize, DataTypes) => {
  return sequelize.define("Usuario", {
    correo: { type: DataTypes.STRING, allowNull: false, unique: true },
    contrasena: { type: DataTypes.STRING, allowNull: false },
    rol: {
      type: DataTypes.ENUM("admin", "cliente"),
      allowNull: false,
    },
  });
};
