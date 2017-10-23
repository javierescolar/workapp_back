const mongoose = require("mongoose");
const Schema = mongoose.Schema;

mongoose.connect("mongodb://localhost/workapp",{ useMongoClient: true,});
mongoose.Promise = global.Promise;

var types_training_schema = new Schema({
    name : {type: String, required: true},
    description: {type: String, required:true},
    image_link: {type: String, required:true}
});

var TypesTraining = mongoose.model("TypesTraining", types_training_schema,"types_training");

module.exports.TypesTraining = TypesTraining;
