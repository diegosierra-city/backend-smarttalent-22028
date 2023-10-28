const { DataTypes } = require('sequelize');
const { sequelize } = require('../db');
//
const { Room } = require('./Room');


 // defino el modelo
const Hotel = sequelize.define('hotels', {
id: { 
 type: DataTypes.INTEGER,
 primaryKey: true,
 allowNull: false,
 autoIncrement: true
},
hotel: {
 type: DataTypes.STRING,
 allowNull: false,
},
country: {
 type: DataTypes.STRING,
 allowNull: false,
},
city: {
 type: DataTypes.STRING,
 allowNull: false,
},
address: {
 type: DataTypes.STRING,
 allowNull: false,
},
//impuestos puede ser un decimal o entero
 taxes: {
  type: DataTypes.DECIMAL(10, 2),
  allowNull: false,
  defaultValue: 0
 },
active:{
 type: DataTypes.BOOLEAN,
 allowNull: false,
 //valor por defecto en true
 defaultValue: true
}
 })

 /// relations
 Hotel.hasMany(Room, {
  foreignKey: 'hotelId',
  sourceKey: 'id'
 })

 Room.belongsTo(Hotel, {
  foreignKey: 'hotelId',
  targetKey: 'id'
 })

 module.exports = { Hotel }