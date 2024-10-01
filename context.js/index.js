require("dotenv").config();

module.exports = (Sequelize) => {
  const sequelize = new Sequelize(
    process.env.DB_TYPE,
    process.env.DB_NAME,
    process.env.DB_PASSWORD,
    {
      host: process.env.DB_HOST,
      dialect: process.env.DB_DIALECT,
      logging: false,
    },
  );

  const turtleModel = require("../models/turtle")(Sequelize, sequelize);
  const weaponModel = require("../models/weapon")(Sequelize, sequelize);
  const pizzaModel = require("../models/pizza")(Sequelize, sequelize);

  return {
    sequelize,
    turtleModel,
    weaponModel,
    pizzaModel,
  };
};
