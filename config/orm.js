let connection = require("../config/connection");

let orm = {
  selectALL: function (tableName, cb) {
    let queryString = `SELECT * FROM ${tableName};`;
    connection.query(queryString, function (err, res) {
      if (err) {
        throw err;
      }
      cb(res);
    });
  },
  insertOne: function (tableName, cols, vals, cb) {
    let queryString = `INSERT INTO ${tableName} (${cols}, devoured) VALUES ("${vals}")`;

    console.log(queryString);

    connection.query(queryString, function (err, res) {
      if (err) {
        throw err;
      }
      cb(res);
    });
  },
  updateOne: function (tableName, cols, booleans, condition, cb) {
    let queryString = `UPDATE ${tableName} SET ${cols} = ${booleans} WHERE ${condition}`;

    console.log(queryString);

    connection.query(queryString, function (err, res) {
      if (err) {
        throw err;
      }
      cb(res);
    });
  },
  deleteOne: function (tableName, condition, cb) {
    const queryString = `DELETE FROM ${tableName} WHERE ${condition}`;
    connection.query(queryString, function (err, result) {
      if (err) {
        throw err;
      }
      cb(res);
    });
  },
};

module.exports = orm;
