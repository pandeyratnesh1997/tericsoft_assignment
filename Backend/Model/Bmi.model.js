const mongoose  = require('mongoose');

const BmiSchema = new mongoose.Schema({
        userId : {type : String, required : true},
        weight : {type: Number, required : true},
        height : {type: Number, required : true}
})

const BmiModel = new mongoose.model('bmi', BmiSchema);

module.exports = BmiModel;
