const mysql = require('mysql2/promise');

const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'Pranav*raj@2001',
  database: 'usermanagement',
  waitForConnections: true,
  connectionLimit: 10
});

module.exports = db;
