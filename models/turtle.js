module.exports = (Sequelize, sequelize, weaponModel) => {
  return sequelize.define("turtle", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: Sequelize.STRING,
    },
    color: {
      type: Sequelize.STRING,
    },
    weaponId: {
      type: Sequelize.INTEGER,
      references: {
        model: weaponModel,
        key: "id",
      },
    },
    firstFavoritePizzaId: {
      type: Sequelize.INTEGER,
    },
    secondFavoritePizzaId: {
      type: Sequelize.INTEGER,
    },
  });
};
