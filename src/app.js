const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

const characters_routes = require("./routes/charactersRoutes");
const users_routes = require('./routes/usersRoutes');

//settings
app.set("port", process.env.PORT ? process.env.PORT : 3000);

//middlewares
app.use(cors({ origin: "*" }), bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


//routes
app.use("/characters", characters_routes);
app.use("/users", users_routes);

module.exports = app;
