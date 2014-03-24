var router = require("./router");

router.resources({
  blocks: {
    resources: {
      transactions: {}
    }
  },
  transactions: {},
  addresses: {}
});


