const mongoose = require("mongoose");
const Schema = mongoose.Schema;

mongoose.connect("mongodb://localhost/workapp",{ useMongoClient: true,});
mongoose.Promise = global.Promise;

var training_schema = new Schema({
    type_training_id : {type: Schema.Types.ObjectId, ref: 'TypesTraining'},
    name : {type: String, required: true},
    description: {type: String, required:true},
    image_link: {type: String, required:true},
    exercises:[
      {
        name : {type: String, required: true},
        description: {type: String, required:true},
        image_link: {type: String, required:true},
        video_link: {type: String, required:true}
      }
    ]
});

var Training = mongoose.model("Training", training_schema,"trainings");

module.exports.Training = Training;
