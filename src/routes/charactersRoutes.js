const express = require("express");
const api = express.Router();
const characterController = require('../controllers/characterController');

api.get("/", characterController.getAll);
api.get("/:name",characterController.getOneByName)

module.exports = api;
