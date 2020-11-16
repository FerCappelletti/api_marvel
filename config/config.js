require("dotenv").config(); //instatiate environment variables

let CONFIG = {}; //Make this global to use all over the application

CONFIG.apiMarvelUrl = "https://gateway.marvel.com:443/v1/public/characters";
CONFIG.apiPublicKey =
  process.env.API_PUBLIC_KEY || "8570eca2f5532e96e6a405162b3f3b71";
CONFIG.apiPrivateKey =
  process.env.API_PRIVATE_KEY || "99af918298b2762f8bd31786f6c400351f5d190f";
CONFIG.DEFAULT_PAGE_SIZE = process.env.DEFAULT_PAGE_SIZE || 10;
module.exports = CONFIG;
