const db = require('../config/db')

const createUsersTable = async () => {
  const sql = `
    CREATE TABLE IF NOT EXISTS users (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(100),
      email VARCHAR(150) UNIQUE,
      password VARCHAR(255),
      role VARCHAR(150),
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `;

  await db.query(sql);
  console.log('Users table created');
};

createUsersTable(); // 👈 THIS RUNS AUTOMATICALLY
