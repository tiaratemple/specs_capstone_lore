const { DataTypes } = require("sequelize");
const { sequelize } = require("../util/database");

module.exports = {
  Advice: sequelize.define("advice", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    advices: DataTypes.STRING,
    adviceBy: DataTypes.STRING,
  }),
};
