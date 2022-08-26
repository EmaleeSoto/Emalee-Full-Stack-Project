// DEPENDENCIES

const express = require("express");
const cors = require("cors");
const gamerController = require("./controllers/gamerController");

// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json());
app.use("/gamers", gamerController);

// ROUTES
app.get("/", (req, res) => {
  res.send("Welcome to Party Up!");
});

app.get("*", (req, res) => {
  res.status(404).send("Not found!");
});

// EXPORT
module.exports = app;
