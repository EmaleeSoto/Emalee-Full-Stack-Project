const db = require("../db/dbConfig.js");

const getAllGamers = async () => {
  try {
    return await db.any("SELECT * FROM gamers");
  } catch (error) {
    return error;
  }
};

module.exports = { getAllGamers };
