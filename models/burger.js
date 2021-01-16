var orm = require("../config/orm.js");

var burgers = {
    selectALL: function(cb) {
    orm.selectALL("burgerAll", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  insertOne: function(cols, vals, cb) {
    orm.insertOne("burgerAll", cols, vals, function(res) {
      cb(res);
    });
  },
  updateOne: function(objColVals, booleans, condition, cb) {
    orm.updateOne("burgerAll", objColVals, booleans, condition, function(res) {
      cb(res);
    });
  },
  deleteOne: function(condition, cb) {
    orm.deleteOne("burgerAll", condition, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = burgers;
