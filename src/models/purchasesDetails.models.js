const { DataTypes } = require("sequelize");
const db = require("../utils/database");

const PurchasesDetail = db.define("purchasesDetails", {
  id: {
    type: DataTypes.UUID,
    primaryKey: true
  },
  idPurchase: {
    type: DataTypes.UUID,
    allowNull: false,
  },
  idProduct: {
    type: DataTypes.UUID,
    allowNull: false,
  },
  sub_total: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  quantity:{
    type: DataTypes.DECIMAL,
    allowNull: false
  },
  state: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  },
});

module.exports = PurchasesDetail;
