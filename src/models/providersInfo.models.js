const { DataTypes } = require("sequelize");
const db = require("../utils/database");

const ProvidersInfo = db.define("providersInfo", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  idProvider: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  account: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  tax_certificate: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = ProvidersInfo;
