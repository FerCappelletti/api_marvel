const models = require('../models/index');

const bcrypt = require("bcrypt");
const saltRounds = 10;
const moment = require("moment");
const jwt = require("jsonwebtoken");
const secret = process.env.SECRET || "1234";

const postUser = async (req, res) => {
  let user = req.body;
  user.password = await bcrypt.hash(user.password, saltRounds);

    models.users
      .post(user)
      .then((response) => {
        res.status(201).send("Created");
      })
      .catch((error) => {
        res.status(500).send(error);
      });
};

const logIn = async (req, res) => {
  let user = await models.users.get(req.body);
  if (user[0].password.length) {
    let isMatch = await bcrypt.compareSync(req.body.password, user[0].password);
    if (isMatch) {
      let token = jwt.sign({ data: user[0].id }, secret, {
        expiresIn: "1 hour",
      });
      res.status(200).json({ token });
    } else {
      res.status(401).send("Password not valid");
    }
  } else {
    res.status(404).send("Email not registered");
  }
};


module.exports = {
  postUser,
  logIn
};