const checkName = (req, res, next) => {
  if (req.body.name) {
    next();
  } else {
    res.status(400).json({ error: "Name is required" });
  }
};

const checkBoolean = (req, res, next) => {
  const { status } = req.body;
  if (status == true || status == false || status == undefined) {
    next();
  } else {
    res.status(400).json({ error: "status must be a boolean value" });
  }
};

const checkForNoAdditionalParams = (req, res, next) => {
  const {
    gamertag,
    pronouns,
    game,
    rank,
    age,
    image,
    country,
    about,
    socialmediaone,
    socialmediatwo,
    socialmediathree,
    status,
    ...other
  } = req.body;
  if (
    other &&
    Object.keys(other).length === 0 &&
    Object.getPrototypeOf(other) === Object.prototype
  ) {
    next();
  } else {
    res.status(400).send({ error: "No additional parameters allowed" });
  }
};

module.exports = {
  checkName,
  checkBoolean,
  checkForNoAdditionalParams,
};
