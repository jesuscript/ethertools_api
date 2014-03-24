var _ = require("underscore"),
    inflection = require("inflection"),
    app;

var createResources = function(path,resources){
  _.each(resources, function(opts,name){
    var controller = opts.controller || require("./controllers/"+name);
    var basePath = path + "/" + name,
        singlePath = basePath+ "/:"+inflection.singularize(name)+"Id";

    app.get(basePath, controller.index);
    app.get(singlePath, controller.show);

    if(opts.resources) createResources(singlePath, opts.resources);
  });
};

module.exports = {
  init: function(expressApp){
    app = expressApp;
    return this;
  },
  /* OPTIONS:
   * controller
   * resources
   * */
  resources: function(resources){
    createResources("", resources);
    return this;
  }
};
