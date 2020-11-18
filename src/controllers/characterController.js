const models = require("../models");
const marvelServices = require("../services/marvelServices");
const authService = require("../services/serviceAuth");

const getAll = async (req, res) => {
  let response = await marvelServices.getDataFromApiMarvel();
  if (response) {
    res.json(response.data.results);
  } else {
    res.send(500).send(error)
  }
};

const getOneByName = async (req, res) => {
  let name = req.params.name;
  let response = await marvelServices.getOneCharacterByName(name);
  res.json(response.data);
};

const postOne = async (req, res) => {
  let character = req.body;
  let token = req.headers.authorization;
  let user_id = await authService.verifyUser(token);
  data = {
    id_user: user_id.data,
    description: character.description,
    name: character.name,
    thumbnail: character.thumbnail.path +"."+ character.thumbnail.extension,
    id: character.id,
  };

    models.characters
      .post(data)
      .then((response) => {
        res.status(201).send("Saved");
      })
      .catch((error) => {
        res.status(500).send(error);
      });
};

const $deleteOne = async (req, res) => {
  let id = req.params.id;

  models.characters
    .$deleteOne(parseInt(id))
      .then((response) => {
      res.status(200).send("Deleted");
    })
    .catch((error) => {
      res.status(500).send(error);
    });
};

const getUserCharacters = async (req, res) => {
  let token = req.headers.authorization;
  let user_id = await authService.verifyUser(token);
  console.log(user_id.data);
  models.characters
    .getAll(user_id.data)
    .then((response) => {
      let set = new Set(response.map(JSON.stringify));
      let favorites = Array.from(set).map(JSON.parse);
      res.status(200).json({
        favorites,
      });
    })
    .catch((error) => {
      res.status(500).send(error);
    });
};
module.exports = {
  getAll,
  getOneByName,
  postOne,
  getUserCharacters,
  $deleteOne,
};
