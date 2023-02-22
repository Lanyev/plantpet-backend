const { DataTypes } = require("sequelize");

const db = require("../utils/database");

const Categories = db.define("category", {
  id: {
    type: DataTypes.UUID,
    primaryKey: true
  },  
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  state: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  }
});

module.exports = Categories;
