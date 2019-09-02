const Transaction = require("../models/trans.model");

exports.findBy = (req, res) => {
  const id = req.params.id;
  Transaction.findOne({ _id: id })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      err.staus(500).send({
        message: err.message || "Some error occurred.",
      });
    });
};

exports.findAll = (req, res) => {
  Transaction.find()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      err.staus(500).send({
        message: err.message || "Some error occurred.",
      });
    });
};
