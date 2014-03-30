require("fortune")({
  adapter: "mongodb",
  router: require("express")(),
  db: process.env.ETHERTOOLS_MONGO_DB,
  host: process.env.ETHERTOOLS_MONGO_HOST,
  port: process.env.ETHERTOOLS_MONGO_PORT,
  username: process.env.ETHERTOOLS_MONGO_USER,
  password: process.env.ETHERTOOLS_MONGO_PASS
}).resource("block",{
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
  transactions: [{ref:"transaction", pkType: String}]
}, {
  model: { pk:"hash" }
}).resource("transaction", {
  sha3: String,
  block: {ref:"block", pkType: String},
  receiveAddress: String,
  safeSender: String,
  value: Number,
  data: String
}, {
  model: { pk:"sha3" }
}).resource("address", {
  address: String,
  balance: Number,
  contract: String
}, {model: { pk: "address" }}).listen(process.env.PORT || 3000);
