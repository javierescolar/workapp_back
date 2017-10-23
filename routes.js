const express = require("express");
var router = express.Router();
var TypesTraining = require("./models/TypesTraining").TypesTraining;


router.get('/', (req, res) => {
  TypesTraining.find({}, function(err, types_training) {
    if (err) {
      console.log(err);
    } else {
      res.send(types_training);
    }
  });
});

module.exports = router;
