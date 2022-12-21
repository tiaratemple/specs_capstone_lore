const { DataTypes } = require("sequelize");
const { sequelize } = require("../util/database");

module.exports = {
  Recipe: sequelize.define("recipe", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    title: DataTypes.STRING,
    content: DataTypes.TEXT,
  }),
};
