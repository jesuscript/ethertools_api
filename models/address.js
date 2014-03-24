var model = require("../model");

module.exports = model("Address", {
  address: String,
  balance: Number,
  contract: String
},{
  pk: "address"
});
