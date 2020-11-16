const server = require("./app");
const db = require("../config/database");
require("dotenv").config();

const port = process.env.PORT
  ? process.env.PORT
  : 3000;
;

server.listen(port, () => {
  db.authenticate()
    .then(() => {
      console.log("Conectado");
    })
    .catch((err) => {
      console.log("No se conectó");
    });

  console.log("Server running on port: " + port);
});


