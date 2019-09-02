module.exports = app => {
  const transaction = require("../controllers/trans.controller");

  app.get("/findBy/:id", transaction.findBy);
  app.get("/getTrans", transaction.findAll);
};
