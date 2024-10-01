const { Sequelize } = require("sequelize");

module.exports = (Sequelize, sequelize) => {
  return sequelize.define("pizza", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: Sequelize.STRING,
    },
    description: {
      type: Sequelize.STRING,
    },
    calories: {
      type: Sequelize.DOUBLE,
    },
  });
};
