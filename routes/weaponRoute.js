const express = require("express");
const { Op } = require("sequelize");

const { db } = require("../context/db");

const weaponRoute = express.Router();

weaponRoute.post("/add", async (req, res) => {
  try {
    const body = req.body;
    const newWeapon = await db.weaponModel.create(body);
    res.status(200).send(newWeapon);
  } catch (err) {
    res.status(500).send("error");
  }
});

weaponRoute.get("/get-all/:dps", async (req, res) => {
  try {
    const dps = req.params.dps;
    const allWeaponsCount = await db.weaponModel.findAndCountAll({
      where: {
        dps: { [Op.gte]: dps },
      },
    });

    res.status(200).send(allWeaponsCount);
  } catch (err) {
    res.status(500).send("error");
  }
});

module.exports = {
  weaponRoute,
};
