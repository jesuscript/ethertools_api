module.exports = function(transform){
  return function(data, opts){
    var out = transform(data,opts);
    return JSON.stringify(out, null, process.env.NODE_ENV == "production" ? null : 2);
  };
};
