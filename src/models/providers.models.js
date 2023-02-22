const { DataTypes } = require("sequelize");
const db = require("../utils/database");

const Providers = db.define("providers", {
  id: {
    type: DataTypes.UUID,
    primaryKey: true
  },
  codigo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  state: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  },
});

module.exports = Providers;
