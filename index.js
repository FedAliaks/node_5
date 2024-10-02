const express = require("express");

const { pizzaRoute } = require("./routes/pizzaRoute.js");
const { weaponRoute } = require("./routes/weaponRoute.js");
const { turtleRoute } = require("./routes/turtleRoute.js");
const { db } = require("./context/db.js");

const app = express();
app.use(express.json());

app.use("/api/pizza", pizzaRoute);
app.use("/api/weapon", weaponRoute);
app.use("/api/turtle", turtleRoute);

db.turtleModel.belongsTo(db.weaponModel, { foreignKey: "weaponId" });
db.turtleModel.belongsTo(db.pizzaModel, { foreignKey: "firstFavoritePizzaId" });
db.turtleModel.belongsTo(db.pizzaModel, {
  foreignKey: "secondFavoritePizzaId",
});

db.sequelize
  .sync()
  .then(() => {
    console.log("connect");
    app.listen(process.env.PORT, () => {
      console.log("app is working now");
    });
  })
  .catch((err) => console.log("err"));
