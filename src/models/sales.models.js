const { DataTypes } = require("sequelize");
const db = require("../utils/database");

const Sales = db.define("sales", {
  id: {
    type: DataTypes.UUID,
    primaryKey: true
  },
  idUser: {
    type: DataTypes.UUID,
    allowNull: false,
  },
  idCustomer: {
    type: DataTypes.UUID,
    allowNull: false,
  },
  invoice: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  total_amount: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  state: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  },
});

module.exports = Sales;
