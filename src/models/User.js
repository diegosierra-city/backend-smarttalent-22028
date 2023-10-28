const { DataTypes } = require('sequelize');
const { sequelize } = require('../db');

 // defino el modelo
const User = sequelize.define('users', {
id: { 
 type: DataTypes.INTEGER,
 primaryKey: true,
 allowNull: false,
 autoIncrement: true
},
name: {
 type: DataTypes.STRING,
 allowNull: false,
},

email: { 
 type: DataTypes.STRING,
 allowNull: false,
 unique: true,
 validate: {
  isEmail: true,
 }
},
// password lo encriptamos com md5
 password: {
  type: DataTypes.STRING,
  allowNull: false,
 },
 active:{
  type: DataTypes.BOOLEAN,
  allowNull: false,
  //valor por defecto en true
  defaultValue: true
 }


 })


 module.exports = { User }