var Training = require("../models/Training").Training;


exports.index = function(req,res) {
  Training.find({})
    .populate("type_training_id")
    .exec(function(err, training) {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(training);
      }
    });
  
}
