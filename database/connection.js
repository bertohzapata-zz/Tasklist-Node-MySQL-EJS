const mysql = require('mysql');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'HolaMundo12345',
    database: 'tasklist'
});

module.exports = pool;