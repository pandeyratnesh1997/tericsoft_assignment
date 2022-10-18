const { Router } = require("express");
const BmiModel = require("../Model/Bmi.model");

const bmiController = Router();

bmiController.get("/", async (req, res) => {
  const { userId } = req.body;

  const allBmi = await BmiModel.find({ userId });
  if (!allBmi) {
    return res
      .status(404)
      .send({ message: "no data found, please create atleast one" });
  }
  return res
    .status(200)
    .send({ message: "data found successfully", Bmidata: allBmi });
});

bmiController.post("/create", async (req, res) => {
  let { userId, weight, height } = req.body;

  // converting height (feet) to height (meter)
  height = height * 0.3048;

  const newBmi = await BmiModel({
    userId,
    height,
    weight,
  });

  await newBmi.save();

  return res.status(201).send({ message: "data saved successfully" });
});

module.exports  =  bmiController;