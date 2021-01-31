let connection = require("../config/connection.js");

let orm = {
  selectALL: function (tableInput, cb) {
    let queryString = `SELECT * FROM ${tableInput};`;
    connection.query(queryString, function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  insertOne: function (tableName, cols, vals, cb) {
    let queryString = `INSERT INTO ${tableName} (${cols}) VALUES ("${vals}");`;

    console.log(queryString);

    connection.query(queryString, function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  updateOne: function (tableName, objColVals, boolean, condition, cb) {
    let queryString = `UPDATE ${tableName} SET ${objColVals} = ${boolean} WHERE ${condition};`;

    console.log(queryString);

    connection.query(queryString, function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  deleteOne: function (tableName, condition, cb) {
    const queryString = `DELETE FROM ${tableName} WHERE ${condition};`;
    connection.query(queryString, function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
};

module.exports = orm;
