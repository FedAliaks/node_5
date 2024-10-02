const express = require("express");

const turtleRoute = express.Router();
const { db } = require("../context/db");

turtleRoute.post("/add", async (req, res) => {
  try {
    const body = req.body;

    const turtle = await db.turtleModel.create(body);

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

turtleRoute.get("/readall", async (req, res) => {
  try {
    const allTurtle = await db.turtleModel.findAll();
    res.status(200).send(allTurtle);
  } catch {
    res.status(500).send("error");
  }
});

module.exports = {
  turtleRoute,
};
