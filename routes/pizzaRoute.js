const express = require("express");
const { db } = require("../context/db");

const pizzaRoute = express.Router();

// add pizza
pizzaRoute.post("/add", async (req, res) => {
  const body = req.body;
  const newPizza = await db.pizzaModel.create(body);
  res.status(200).send(newPizza);
});

pizzaRoute.get("/read/:id", async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);

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

// TO DO #3 all liked pizza unique
pizzaRoute.get("/all-liked", (req, res) => {
  console.log("all liked pizza");
  res.status(200).send("all liked");
});

// TO DO #5 update super fat
pizzaRoute.put("/add-super-fat", (req, res) => {
  const { id } = req.params;
  console.log(id);
  res.status(200).send(id);
});

module.exports = {
  pizzaRoute,
};
