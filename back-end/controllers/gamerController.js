const express = require("express");
const gamers = express.Router();
const {
  getAllGamers,
  getGamer,
  createGamer,
  updateGamer,
  deleteGamer,
} = require("../queries/gamers.js");

const {
  checkName,
  checkBoolean,
  checkForNoAdditionalParams,
} = require("../validations/checkGamer.js");

// INDEX
gamers.get("/", async (req, res) => {
  const allGamers = await getAllGamers();
  if (allGamers[0]) {
    res.status(200).json({ payload: allGamers });
  } else {
    res.status(500).json({ error: "server error" });
  }
});

// SHOW
gamers.get("/:id", async (req, res) => {
  const { id } = req.params;
  const gamer = await getGamer(id);
  if (gamer.id) {
    res.status(200).json({ success: true, payload: gamer });
  } else {
    res.status(404).json({ success: false, payload: "not found" });
  }
});

// CREATE
gamers.post(
  "/",
  checkName,
  checkBoolean,
  checkForNoAdditionalParams,
  async (req, res) => {
    try {
      const gamer = await createGamer(req.body);
      res.json({ success: true, payload: gamer[0] });
    } catch (error) {
      res.status(400).json({ error: "bad request" });
    }
  }
);

// UPDATE
gamers.put(
  "/:id",
  checkName,
  checkBoolean,
  checkForNoAdditionalParams,
  async (req, res) => {
    try {
      const gamer = await updateGamer(req.body, req.params.id);
      res.json({ success: true, payload: gamer });
    } catch (error) {
      res.status(400).json({ success: false, error: "bad request" });
    }
  }
);

// DELETE
gamers.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedGamer = await deleteGamer(id);
  if (deletedGamer) {
    if (deletedGamer.id) {
      res.status(200).json({ success: true, payload: deletedGamer });
    } else {
      res.status(404).json({ success: false, payload: deletedGamer });
    }
  } else {
    res.status(500).json({ success: false, payload: deletedGamer });
  }
});

module.exports = gamers;
