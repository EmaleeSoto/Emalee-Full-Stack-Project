const express = require("express");
const gamers = express.Router();
const { getAllGamers } = require("../queries/gamers.js");

// INDEX
gamers.get("/", async (req, res) => {
  const allGamers = await getAllGamers();
  if (allGamers[0]) {
    res.status(200).json({ payload: allGamers });
  } else {
    res.status(500).json({ error: "server error" });
  }
});

module.exports = gamers;
