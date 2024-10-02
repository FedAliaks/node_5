const express = require("express");
const { Op } = require("sequelize");

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

turtleRoute.get("/liked", async (req, res) => {
  try {
    const type = req.query.type;
    const pizza = await db.pizzaModel.findOne({
      where: {
        name: type,
      },
    });

    const idPizza = pizza.id;

    if (!idPizza) {
      res.status(400).send("pizza have not found");
    }

    const selectedPizzas = await db.turtleModel.findAll({
      where: {
        [Op.or]: [
          { firstFavoritePizzaId: idPizza },
          { secondFavoritePizzaId: idPizza },
        ],
      },
    });

    res.status(200).send(selectedPizzas);
  } catch {
    res.status(502).send("error");
  }
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
