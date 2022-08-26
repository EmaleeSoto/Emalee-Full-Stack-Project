const db = require("../db/dbConfig.js");

// INDEX
const getAllGamers = async () => {
  try {
    return await db.any("SELECT * FROM gamers");
  } catch (error) {
    return error;
  }
};

// SHOW
const getGamer = async (id) => {
  try {
    return await db.one("SELECT * FROM gamers WHERE id=$1", id);
  } catch (error) {
    return error;
  }
};

// CREATE
const createGamer = async (gamer) => {
  try {
    if (!gamer.image || gamer.image === "") {
      gamer.image =
        "https://dummyimage.com/400x400/6e6c6e/e9e9f5.png&text=No+Image";
    }
    return await db.any(
      "INSERT INTO gamers (gamertag, pronouns, game, rank, age, image, country, about, socialmediaone, socialmediatwo, socialmediathree, status) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12) RETURNING *",
      [
        gamer.gamertag,
        gamer.pronouns,
        gamer.game,
        gamer.rank,
        gamer.age,
        gamer.image,
        gamer.country,
        gamer.about,
        gamer.socialmediaone,
        gamer.socialmediatwo,
        gamer.socialmediathree,
        gamer.status,
      ]
    );
  } catch (error) {}
};

// UPDATE
const updateGamer = async (id, gamer) => {
  try {
    return await db.one(
      "UPDATE gamers SET gamertag=$1, pronouns=$2, game=$3, rank=$4, age=$5, image=$6, country=$7, about=$8, socialmediaone=$9, socialmediatwo=$10, socialmediathree=$11, status=$12 where id=$13 RETURNING *",
      [
        gamer.gamertag,
        gamer.pronouns,
        gamer.game,
        gamer.rank,
        gamer.age,
        gamer.image,
        gamer.country,
        gamer.about,
        gamer.socialmediaone,
        gamer.socialmediatwo,
        gamer.socialmediathree,
        gamer.status,
        id,
      ]
    );
  } catch (error) {
    return error;
  }
};

const deleteGamer = async (id) => {
  try {
    return await db.one("DELETE FROM gamers WHERE id=$1 RETURNING *", id);
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllGamers,
  getGamer,
  createGamer,
  updateGamer,
  deleteGamer,
};
