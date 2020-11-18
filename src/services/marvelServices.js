const apikey = require('../../config/config').apiPublicKey;
const apiPrivateKey = require("../../config/config").apiPrivateKey;
const md5 = require('md5');
const moment = require("moment");
const apiMarvelUrl = require('../../config/config').apiMarvelUrl;
var axios = require('axios');

async function getDataFromApiMarvel() {
    const ts = moment().format();
    const credentials =  ts + apiPrivateKey + apikey;
    const hash = md5(credentials);

  try {
    let item = await axios
      .get(apiMarvelUrl + "?ts=" + ts +"&apikey=" + apikey + "&hash=" + hash )
      .catch((error) => {
        return error;
      });
    return item.data;
  } catch (error) {
    return error;
  }
}

async function getOneCharacterByName(name) {
  const ts = moment().format();
  const credentials = ts + apiPrivateKey + apikey;
  const hash = md5(credentials);

  try {
    let item = await axios
      .get(
        apiMarvelUrl +"?ts=" + ts +
          "&name=" +
          name +
          "&apikey=" +
          apikey +
          "&hash=" +
          hash
      )
      .catch((error) => {
        return error;
      });
    return item.data;
  } catch (error) {
    return error;
  }
};

module.exports = {
    getDataFromApiMarvel,
  getOneCharacterByName
}