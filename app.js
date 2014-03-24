var express = require("express"),
    app = express();

require("./router").init(app);
require("./routes");


app.listen(process.env.PORT || 3000, function(){
  console.log("Listening on port %d", this.address().port);
});




