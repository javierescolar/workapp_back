var TypesTraining = require("../models/TypesTraining").TypesTraining;

exports.index = function(req,res) {
  TypesTraining.find({}, function(err, types_training) {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(types_training);
    }
  });
}

exports.edit = function(req,res) {
  TypesTraining.findById(req.params.id, function(err, types_training) {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(types_training);
    }
  });
}

exports.store = function(req,res) {
  var data = {
    name:req.body.name,
    description:req.body.description,
    image_link:req.body.image_link
  }

  let types_training = new TypesTraining(data);

  types_training.save((err)=> {
    if(!err){
      console.log("type training guardado correctamente");
      res.status(200).send(types_training);
    } else {
      res.status(500).send(err);
    }
  });
}

exports.update = function(req,res){
  TypesTraining.findById(req.params.id,function(err,types_training){
    if(!err){
      types_training.name = req.body.name;
      types_training.description = req.body.description;
      types_training.image_link = req.body.image_link;
      types_training.save((err)=> {
        if(!err){
          console.log("type training modificado correctamente");
          res.status(200).send(types_training);
        } else {
          res.status(500).send(err);
        }
      });
    } else {
      res.status(500).send(err);
    }
  });
}

exports.destroy = function(req,res){
  TypesTraining.findOneAndRemove({ _id: req.params.id}, function(err){
    if(!err){
        console.log("type training eliminado correctamente");
        res.status(200).end();
    } else {
        res.status(500).send(err);
    }
  });
}
