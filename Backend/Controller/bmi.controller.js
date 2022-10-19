const { Router } = require("express");
const BmiModel = require("../Model/Bmi.model");
const UserModel = require("../Model/User.model");

const bmiController = Router();

bmiController.get("/", async (req, res) => {
  const { userId } = req.body;

  const user = await UserModel.findOne({_id : JSON.parse(userId)})
  
  const allBmi = await BmiModel.find({ userId });
  if (!allBmi) {
    return res
      .status(404)
      .send({ message: "no data found, please create atleast one" });
  }
  return res
    .status(200)
    .send({ message: "data found successfully", Bmidata: allBmi, user });
});

bmiController.post("/create", async (req, res) => {
 
  let { userId, weight, height } = req.body;

  // converting height (feet) to height (meter)
  height = height * 0.3048;

  const bmi = (weight / (height ** 2)).toFixed(2);

  const newBmi = await BmiModel({
    userId,
    height,
    weight,
    bmi,
  });

  await newBmi.save();

  return res.status(201).send({ message: "data saved successfully", newBmi });
});

module.exports = bmiController;
