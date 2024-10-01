const { DataTypes } = require("sequelize");

module.exports = (Sequelize, sequelize) => {
  return sequelize.define("turtlePizza", {
    favoriteType: {
      type: DataTypes.ENUM("firstFavoritePizzaId", "secondFavoritePizzaId"),
      allowNull: false,
    },
  });
};
