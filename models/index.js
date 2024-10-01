require("dotenv").config();

module.exports = (Sequelize) => {
  const sequelize = new Sequelize(
    process.env.DB_TYPE,
    process.env.DB_NAME,
    process.env.DB_PASSWORD,
    {
      host: process.env.DB_HOST,
      dialect: process.env.DB_DIALECT,
    },
  );

  return {
    sequelize,
  };
};
