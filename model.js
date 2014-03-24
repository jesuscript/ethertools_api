var mongoose = require("mongoose"),
    _ = require("underscore");


var mongouri = "mongodb://";
if(process.env.ETHERTOOLS_MONGO_USER && process.env.ETHERTOOLS_MONGO_PASS){
  mongouri += process.env.ETHERTOOLS_MONGO_USER + ":" + process.env.ETHERTOOLS_MONGO_PASS + "@";
}
mongoose.connect(mongouri+process.env.ETHERTOOLS_MONGO_URL + "/ethertools");

console.log(mongouri+process.env.ETHERTOOLS_MONGO_URL + "/ethertools");

module.exports = function(name, schemaObj, options){
  options = options || {};
  
  var schema = mongoose.Schema(_.extend(schemaObj, {
    id: options.pk ? schemaObj[options.pk] : String
  }));

  return mongoose.model(name, schema);
};
