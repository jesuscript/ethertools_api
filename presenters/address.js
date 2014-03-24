var presenter = require("../presenter");

module.exports = presenter(function(data){
  //TODO DRY this up
  return {addresses: data};
});
