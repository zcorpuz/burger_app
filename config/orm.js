const connection = require('./connection');

// Helper function to convert object key/value pairs to SQL syntax
const objToSql = ob => {
    const arr = [];

    // Loop through the keys and push the key/value as a string int arr
    for (var key in ob) {
        var value = ob[key];

        if (Object.hasOwnProperty.call(ob, key)) {
            //if string with spaces, add quotations (Michael Jordan = 'Michael Jordan')
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            arr.push(key + "=" + value);
        }
    }

    //translate array of strings to a single comma-separated string
    return arr.toString();
}


// Object for all our SQL statement functions
const orm = {
    selectAll: function(tableInput, cb) {
        let queryString = `SELECT * FROM ${tableInput};`;

        connection.query(queryString, (err, result) => {
          if (err) throw err;
          cb(result);
        });
    },
    insertOne: function(table, col, val, cb) {
        let queryString = `INSERT INTO ${table} (${col}) VALUES (?)`;
    
        connection.query(queryString, val, (err, result) => {
          if (err) throw err;
          cb(result);
        });
    },
    update: function(table, objColVals, condition, cb) {
        let queryString = "UPDATE " + table;
    
        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;
    
        console.log(queryString);
        connection.query(queryString, (err, result) => {
          if (err) throw err;
          cb(result);
        });
      },
};


module.exports = orm;