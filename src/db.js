const { Sequelize } = require('sequelize');
require('dotenv').config();
const {
  DB_USER, DB_PASSWORD, DB_HOST,DATABASE
} = process.env;

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DATABASE}`, {
  logging: false, // set to console.log to see the raw SQL queries ///production > false
  native: false, // lets Sequelize know we can use pg-native for ~30% more speed
});



module.exports = {
 //...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
 connDB: sequelize,     // para importart la conexión const { connDB } = require('./db.js');
};