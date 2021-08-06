// a module that loads environment variables from a .env file into process
require("dotenv").config();

// import the sequelize constructor from the library
const Sequelize = require("sequelize");

// create connection to our database, pass in your MySQL information for user info
  const sequelize = process.env.JAWSDB_URL
? new Sequelize(process.env.JAWSDB_URL)
: new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306,
    dialectOptions: {
      decimalNumbers: true,
    },
  });

module.exports = sequelize;