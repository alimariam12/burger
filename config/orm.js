let connection = require("../config/connection");

let orm = {
    selectALL: function(table, cb){
        let queryString = 'SELECT * FROM' + tableName + ";";
        connection.query(queryString, function(err, res){
            if(err){
                throw err;
            }
            cb(res);
        });
    }
    insertOne: function(table, cols, vals, cb) {
        let dbQuery = 
        "INSERT INTO" + table + "(" + cols.toString() + ")" + "VALUES (" + createQmarks(vals.length) + ")"; 
    }
}
