const Sequelize = require("sequelize");

const db = require("./index")(Sequelize);

module.exports = {
  db,
};
