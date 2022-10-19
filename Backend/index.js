const express = require("express");
const connection = require("./Config/Connection");
const cors = require("cors");
const { json } = require("express");

const userController = require("./Controller/user.controller");
const authenticate = require("./Middleweres/authentication");
const bmiController = require("./Controller/bmi.controller");

require("dotenv").config();

const app = express();
app.use(cors({
  origin : "https://tericsoftbmicalci.netlify.app"
}));
app.use(json());

app.use('/user', userController);
app.use(authenticate)

app.use('/bmi', bmiController)

app.listen(process.env.PORT, async () => {
  await connection;

  console.log(`listening to port ${process.env.PORT}`);
});
