const express = require("express");

const pizzaRoute = express.Router();

pizzaRoute.post("/add", (req, res) => {
  const body = req.body;
  console.log("here");
  console.log(body);

  res.status(200).send(body);
});

// TO DO #7 Найдем пиццу с id равным 1
pizzaRoute.get("/read/:id", (req, res) => {
  const { id } = req.params;
  console.log(id);
  res.status(200).send(id);
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
