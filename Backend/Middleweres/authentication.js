const jwt = require("jsonwebtoken");
require("dotenv").config();

// authentiacate middlewere

const authenticate = (req, res, next) => {
  if (!req.headers.authorisation) {
    return res.status(401).send({ message: "please Login again" });
  }
  const token = req.headers.authorisation.split(" ")[1];
  jwt.verify(token, process.env.PRIVATEKEY, function (err, decoded) {
    if (err) {
      return res.status(401).send({ message: " Please Login again" });
    }
    req.body.userId = decoded.userId;

    next();
  });
};

module.exports = authenticate;
