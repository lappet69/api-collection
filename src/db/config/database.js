require("dotenv").config();
module.exports = {
  development: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: "postgres",
  },
  test: {
    username: "postgres",
    password: "root",
    database: "todos_test",
    host: "127.0.0.1",
    dialect: "postgres",
  },
  production: {
    username: "postgres",
    password: "root",
    database: "todos_production",
    host: "127.0.0.1",
    dialect: "postgres",
  },
};
