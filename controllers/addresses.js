var address = require("../models/address"),
    presenter = require("../presenters/address");

module.exports = {
  index: function(req,res){
    address.find().exec(function(err, data){
      res.write(presenter(data));
      res.end();
    });
  },
  show: function(req,res){
    address.find({id: req.params.addressId}).exec(function(err, data){
      res.write(presenter(data));
      res.end();
    });
  }
};
