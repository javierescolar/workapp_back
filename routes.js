const express = require("express");
var router = express.Router();
// Require controller modules
var types_training_controller = require('./controllers/TypesTrainingController');


router.route('/types_training')
  .get(types_training_controller.index)
  .post(types_training_controller.store);

router.route('/types_training/:id')
  .put(types_training_controller.update)
  .delete(types_training_controller.destroy);


module.exports = router;
