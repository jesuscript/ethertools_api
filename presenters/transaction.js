var presenter = require("../presenter");

module.exports = presenter(function(data){
  return {transacitons: data};
});
