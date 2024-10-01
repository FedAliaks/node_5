require("dotenv").config();
const express = require("express");
const Sequelize = require("sequelize");

const app = express();
app.use(express.json());

const sequelize = new Sequelize(
  process.env.DB_TYPE,
  process.env.DB_NAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
  },
);

sequelize
  .sync()
  .then(() => {
    console.log("connect");
    app.listen(process.env.PORT, () => {
      console.log("app is working now");
    });
  })
  .catch((err) => console.log("err"));
