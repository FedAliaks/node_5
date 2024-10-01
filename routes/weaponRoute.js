const express = require("express");

const weaponRoute = express.Router();

weaponRoute.post("/add", (req, res) => {
  const body = req.body;
  console.log("here");
  console.log(body);

  res.status(200).send(body);
});

// TO DO #6 Запросим число оружий с dps больше 100
weaponRoute.get("/readAll", (req, res) => {
  console.log("get all weapon more than 200 pds");

  res.status(200).send("get all weapon");
});

module.exports = {
  weaponRoute,
};
