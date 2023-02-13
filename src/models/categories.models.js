const { DataTypes } = require("sequelize");

const db = require("../utils/database");

const Categories = db.define("categories", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    references:{
      model: "users",
      key: "idRol"
    }
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
