const { DataTypes } = require("sequelize");
const db = require("../db/connection");

const CustomersInfo = db.define("customersInfo", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  idCustomer: {
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

module.exports = CustomersInfo;
