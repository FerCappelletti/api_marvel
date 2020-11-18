const server = require("./app");
const express = require("express");
const app = express();
const db = require("../config/database");
const cors = require("cors");
require("dotenv").config();

const port = process.env.PORT
  ? process.env.PORT
  : 3000;
;

server.listen(port, () => {
  db.authenticate()
    .then(() => {
      startAPI();
      console.log("Conectado");
    })
    .catch((err) => {
      console.log("No se conectó");
    });

  console.log("Server running on port: " + port);
});

function startAPI() {
  app.enable("trust proxy");

  app.use(cors());

  // CORS middleware
  app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method"
    );
    res.header(
      "Access-Control-Allow-Methods",
      "GET, POST, OPTIONS, PUT, DELETE"
    );
    res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");
    next();
  });
}



