const mysql = require('mysql2');

// create connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',        
  password: 'Pranav*raj@2001',
  database: 'user' 
});

// connect to database
db.connect((err) => {
  if (err) {
    console.error('❌ MySQL connection failed:', err.message);
    return;
  }
  console.log('✅ MySQL connected successfully');
});

module.exports = db;
