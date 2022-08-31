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
      "INSERT INTO gamers (gamertag, pronouns, tagline, game, rank, role, age, image, country, about, socialmediaone, socialmediatwo, socialmediathree, status) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14) RETURNING *",
      [
        gamer.gamertag,
        gamer.pronouns,
        gamer.tagline,
        gamer.game,
        gamer.rank,
        gamer.role,
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
const updateGamer = async (gamer, id) => {
  try {
    return await db.one(
      "UPDATE gamers SET gamertag=$1, pronouns=$2, tagline=$3, game=$4, rank=$5, role=$6, age=$7, image=$8, country=$9, about=$10, socialmediaone=$11, socialmediatwo=$12, socialmediathree=$13, status=$14 WHERE id=$15 RETURNING *",
      [
        gamer.gamertag,
        gamer.pronouns,
        gamer.tagline,
        gamer.game,
        gamer.rank,
        gamer.role,
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
