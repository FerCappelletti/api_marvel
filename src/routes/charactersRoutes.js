const express = require("express");
const api = express.Router();
const characterController = require('../controllers/characterController');

api.get("/", characterController.getAll);
api.get("/:name", characterController.getOneByName);
api.post('/', characterController.postOne);
api.delete('/:id', characterController.$deleteOne)


module.exports = api;
