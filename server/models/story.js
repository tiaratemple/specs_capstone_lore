const { DataTypes } = require("sequelize");
const { sequelize } = require("../util/database");

module.exports = {
  Story: sequelize.define("story", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    stories: DataTypes.STRING,
    storyBy: DataTypes.STRING,
  }),
};
