const express = require("express");
const userController = require('../controllers/userController');
const characterController = require("../controllers/characterController");

const api = express.Router();

api.post("/", userController.postUser);
api.post("/login", userController.logIn);
api.get("/favorites", characterController.getUserCharacters);

module.exports = api;
