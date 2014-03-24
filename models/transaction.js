var model = require("../model");

module.exports = model("Transaction", {
  sha3: String,
  blockHash: String,
  receiveAddress: String,
  safeSender: String,
  value: Number,
  data: String
},{
  pk: "sha3"
});
