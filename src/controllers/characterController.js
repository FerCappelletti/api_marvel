const db = require("../../config/database");
const marvelServices = require('../services/marvelServices');


const getAll = async (req, res) => {
    let response = await marvelServices.getDataFromApiMarvel();
    res.json(response.data.results);
 };

const getOneByName = async (req, res) => {
    let name = req.params.name;
    let response = await marvelServices.getOneCharacterByName(name);
    res.json(response.data)
 };

module.exports = {
    getAll,
    getOneByName
}

