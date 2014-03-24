var model = require("../model");

module.exports = model("Block", {
  hash: String,
  number: Number,
  parentHash: String,
  sha3Uncles: String,
  coinbaseAddress: String,
  stateRoot: String,
  sha3Transactions: String,
  difficulty: Number,
  timestamp: Number,
  nonce: Number,
  transactions: Array
},{
  pk: "hash",
  statics: {},
  methods: {}
});
