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
    recipeName: DataTypes.STRING,
    passedOnFrom: DataTypes.STRING,
    prep: DataTypes.STRING,
    ingredients: DataTypes.STRING,
    instructions: DataTypes.STRING,
    //userId: DataTypes.INTEGER,
  }),
};
