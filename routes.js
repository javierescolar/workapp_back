const express = require("express");
var router = express.Router();
// Require controller modules
var types_training_controller = require('./controllers/TypesTrainingController');
var training_controller = require('./controllers/TrainingController');

router.route('/types_training')
  .get(types_training_controller.index)
  .post(types_training_controller.store);

router.route('/types_training/:id')
  .get(types_training_controller.edit)
  .put(types_training_controller.update)
  .delete(types_training_controller.destroy);

router.route('/types_training/:id/trainings')
  .get(training_controller.index);


module.exports = router;
