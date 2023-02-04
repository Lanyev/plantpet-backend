const { DataTypes } = require("sequelize");
const db = require("../db/connection");

const SalesDetails = db.define("salesDetails", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  idSale: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  idProduct: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  sub_total: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  state: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  },
});

module.exports = SalesDetails;
