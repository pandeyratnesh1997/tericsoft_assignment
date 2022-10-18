import mongoose from "mongoose"
require('dotenv').config();


 const connection = mongoose.connect(process.env.MONGO_URL)

module.exports =  connection;
