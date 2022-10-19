const { Router } = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const UserModel = require("../Model/User.model");

const userController = Router();




userController.post("/register", async (req, res) => {
  const { email, password, name } = req.body;

  const user = await UserModel.findOne({ email });
  if (user) {
    return res.status(403).send({ message: "user already exist" });
  }
  bcrypt.hash(password, 10, async function (err, hash) {
    if (err) {
      return res.status(500).send({ message: "Error in Register" });
    }
    const newuser = new UserModel({
      name,
      email,
      password: hash,
    });

    await newuser.save();
    res.status(201).send({ message: "signup sucessfull" });
  });
});

userController.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await UserModel.findOne({ email });

  const userId = JSON.stringify(user._id)
  const hash = user.password

  if (!user) {
    return res.status(401).send({ message: "user not found" });
  }
  bcrypt.compare(password, hash, function (err, result) {
    if (err) {
      return res.status(401).send({ message: "invalid credentials" });
    }

    const token = jwt.sign({ email, userId }, process.env.PRIVATEKEY);
    return res.status(200).send({ message: "login successful", token: token });
  });
});

module.exports = userController;
