const { DataTypes } = require('sequelize');
const { sequelize } = require('../db');

 // defino el modelo
const BookingPax = sequelize.define('booking_paxs', {
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
last_name: {
 type: DataTypes.STRING,
 allowNull: false,
},
//birthday date
 birthday: {
  type: DataTypes.DATE,
  allowNull: false,
 },
 genere: {
  type: DataTypes.STRING,
  allowNull: false,
 },
 document_type: {
  type: DataTypes.STRING,
  allowNull: false,
 },
 document_number: {
  type: DataTypes.STRING,
  allowNull: false,
 },
 email: {
  type: DataTypes.STRING,
  allowNull: false,
  validate: {
   isEmail: true,
  }
 },
 phone: {
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


 module.exports = { BookingPax }