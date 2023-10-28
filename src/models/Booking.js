const { DataTypes } = require('sequelize');
const { sequelize } = require('../db');
//
const { BookingPax } = require('./BookingPax');
const { Room } = require('./Room');

 // defino el modelo
const Booking = sequelize.define('bookings', {
id: { 
 type: DataTypes.INTEGER,
 primaryKey: true,
 allowNull: false,
 autoIncrement: true
},
pax: {
  type: DataTypes.INTEGER,
  allowNull: false,
 }, 
dateIn: {
 type: DataTypes.DATE,
 allowNull: false,
},
dateOut: {
 type: DataTypes.DATE,
 allowNull: false,
},
price: {
 type: DataTypes.INTEGER,
 allowNull: false,
},
emergency_name: {
 type: DataTypes.STRING,
 allowNull: false,
},
emergency_phone: {
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

 ///relations
 // cada Booking corresponde a una sola Room
 Booking.belongsTo(Room, {
  foreignKey: 'roomId',
  sourceKey: 'id'
 })
 Room.hasMany(Booking, {
  foreignKey: 'roomId',
  sourceKey: 'id'
 })

 //cada Booking puede tener muchos BookingPax
 Booking.hasMany(BookingPax, {
  foreignKey: 'bookingId',
  sourceKey: 'id'
 }) 
 BookingPax.belongsTo(Booking, {
  foreignKey: 'bookingId',
  targetKey: 'id'
 })


 module.exports = { Booking }