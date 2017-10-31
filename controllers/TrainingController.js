var Training = require("../models/Training").Training;


exports.index = function(req,res) {
  Training.find({type_training_id: req.params.id},(err, trainings) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(trainings);
      }
    });
}
