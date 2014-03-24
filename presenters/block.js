var presenter = require("../presenter"),
    _ = require("underscore");

module.exports = presenter(function(data){
  _.each(data, function(d,k){
    d.transactions = _.map(d.transactions, function(t){
      return { id: t };
    });
    
  });

  return {
    blocks:  data
  };
});
