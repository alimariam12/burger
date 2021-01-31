// Set up MySQL connection.
let mysql = require("mysql");

let connection;
if ( process.env.JAWSDB_url) {
connection = mysql.createConnection( process.env.JAWSDB_url)
} else {
  connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "weekend",
  database: "burgers_db"
  })
}
// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;


