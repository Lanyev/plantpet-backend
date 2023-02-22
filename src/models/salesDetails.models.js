const { DataTypes } = require("sequelize");
const db = require("../utils/database");

const SalesDetail = db.define("salesDetails", {
  id: {
    type: DataTypes.UUID,
    primaryKey: true
  },
  idSale: {
    type: DataTypes.UUID,
    allowNull: false,
  },
  idProduct: {
    type: DataTypes.UUID,
    allowNull: false,
  },
  quantity:{
    type: DataTypes.DECIMAL,
    allowNull: false
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

module.exports = SalesDetail;
