var block = require("../models/block"),
    presenter = require("../presenters/block");

module.exports = {
  index: function(req,res){
    block.find().exec(function(err, data){
      res.write(presenter(data));
      res.end();
    });
  },
  show: function(req,res){
    block.find({id:req.params.blockId}).exec(function(err, data){
      res.write(presenter(data));
      res.end();
    });
  }
};
