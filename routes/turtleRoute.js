const express = require("express");

const turtleRoute = express.Router();
const { db } = require("../context/db");

turtleRoute.post("/add", async (req, res) => {
  try {
    console.log("here");
    const {
      name,
      color,
      weaponId,
      firstFavoritePizzaId,
      secondFavoritePizzaId,
    } = req.body;

    const body = req.body;

    const turtle = await db.turtleModel.create(body);
    console.log("next");

    console.log("next-next");

    res.status(200).send(turtle);
  } catch {
    res.status(500).send("error");
  }
});

//TO DO #2 pizza Mazzarella
turtleRoute.get("/liked", (req, res) => {
  const query = req.query;
  console.log(query);

  res.status(200).send(query);
});

//TO DO #8 Добавим пятой черепашке любимую пиццу через объект черепахи
turtleRoute.put("/update-pizza/:id", (req, res) => {
  res.status(200).send("add favouite pizza");
});

module.exports = {
  turtleRoute,
};
