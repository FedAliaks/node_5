const express = require("express");
const { Op } = require("sequelize");

const { db } = require("../context/db");

const pizzaRoute = express.Router();

// add pizza
pizzaRoute.post("/add", async (req, res) => {
  try {
    const body = req.body;
    const newPizza = await db.pizzaModel.create(body);
    res.status(200).send(newPizza);
  } catch {
    res.status(500).send("error");
  }
});

pizzaRoute.get("/read/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const pizza = await db.pizzaModel.findOne({
      where: {
        id: id,
      },
    });

    if (!pizza) {
      res.status(400).send("id has not found");
    } else {
      res.status(200).send(pizza);
    }
  } catch (err) {
    res.status(500).send("something wrong");
  }
});

pizzaRoute.get("/all-liked", async (req, res) => {
  try {
    const allLikedPizzas = await db.turtleModel.findAll({
      attributes: ["firstFavoritePizzaId", "secondFavoritePizzaId"],
    });

    const setLikedPizzas = new Set();
    allLikedPizzas.forEach((item) => {
      setLikedPizzas.add(item.firstFavoritePizzaId);
      setLikedPizzas.add(item.secondFavoritePizzaId);
    });

    const arrPizzasId = Array.from(setLikedPizzas).filter((item) => item);
    const pizzas = await db.pizzaModel.findAll({
      where: {
        id: {
          [Op.in]: arrPizzasId,
        },
      },
    });

    res.status(200).send(pizzas);
  } catch {
    res.status(500).send("error");
  }
});

pizzaRoute.put("/add-super-fat", async (req, res) => {
  try {
    const allPizzaId = await db.pizzaModel.findAll({
      where: {
        calories: { [Op.gte]: 3000 },
      },
    });

    const arr = allPizzaId.map((item) => item.dataValues.id);

    arr.forEach(async (idItem) => {
      const pizza = await db.pizzaModel.findOne({
        where: {
          id: idItem,
        },
      });

      pizza.description = pizza.description + "SUPER FAT";

      await pizza.save();
    });

    res.status(200).send("DONE");
  } catch {
    res.status(500).send("something wrong");
  }
});

module.exports = {
  pizzaRoute,
};
