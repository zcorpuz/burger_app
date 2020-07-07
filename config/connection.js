const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'Finally08',
    database: 'burgers_db'
});

connection.connect(err => {
    if (err) throw err;
    console.log(`Connection as id: ${connection.threadid}`);
});

module.exports = connection;