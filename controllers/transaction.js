var transaction = require("../models/transaction"),
    presenter = require("../presenters/transaction");

module.exports = {
  index: function(req,res){
    //TODO create a static
    transaction.find(req.params.blocksId && {block: req.params.blocksId})
      .exec(function(err, data){
        res.write(presenter(data));
        res.end();
      });
  },
  show: function(req,res){
    transaction.find({id: req.params.transactionId}).exec(function(err,data){
      res.write(presenter(data));
      res.end();
    });
  }
};
