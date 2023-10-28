const { Sequelize } = require('sequelize');
require('dotenv').config();
const {
  DB_USER, DB_PASSWORD, DB_HOST,DATABASE
} = process.env;

/* const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DATABASE}`, {
  logging: false, // set to console.log to see the raw SQL queries ///production > false
  native: false, // lets Sequelize know we can use pg-native for ~30% more speed
}); */

const sequelize = new Sequelize(DATABASE, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  dialect: 'postgres'  
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Conexión establecida.');
  })
  .catch(err => {
    console.error('Error de conexión:', err);
  });


module.exports = {sequelize};