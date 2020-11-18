const jwt = require("jsonwebtoken");
const secret = process.env.SECRET || "1234";

const verifyUser = (data) => {

    const token = data.split(" ")[1];
    const user = jwt.verify(token, secret);
    if (user) {
      return user
    } else {
      return err
    }
}

module.exports = {
    verifyUser
}
