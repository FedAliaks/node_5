const express = require("express");
const Sequelize = require("sequelize");

const db = require("./models/index")(Sequelize);
const app = express();
app.use(express.json());

db.sequelize
  .sync()
  .then(() => {
    console.log("connect");
    app.listen(process.env.PORT, () => {
      console.log("app is working now");
    });
  })
  .catch((err) => console.log("err"));
