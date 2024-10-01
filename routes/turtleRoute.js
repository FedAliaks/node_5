const express = require("express");

const turtleRoute = express.Router();

// TO DO #4 add turtle
turtleRoute.post("/add", (req, res) => {
  const body = req.body;
  console.log("here");
  console.log(body);

  res.status(200).send(body);
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
