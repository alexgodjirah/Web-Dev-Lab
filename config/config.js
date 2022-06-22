require('dotenv').config({ path: '../.env' });

module.exports = {
  "development": {
    "username": process.env.DB_NAME,
    "password": process.env.DB_PASSWORD,
    "database": "todo_dev",
    "host": "localhost",
    "dialect": "postgres"
  },
  "test": {
    "username": process.env.DB_NAME,
    "password": process.env.DB_PASSWORD,
    "database": "todo_test",
    "host": "localhost",
    "dialect": "postgres"
  },
  "production": {
    "username": process.env.DB_NAME,
    "password": process.env.DB_PASSWORD,
    "database": "todo_prod",
    "host": "localhost",
    "dialect": "postgres"
  }
}
