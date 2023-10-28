const { DataTypes } = require('sequelize');
const { sequelize } = require('../db');

 // defino el modelo
const Room = sequelize.define('rooms', {
id: { 
 type: DataTypes.INTEGER,
 primaryKey: true,
 allowNull: false,
 autoIncrement: true
},
//
 room_type: {
  type: DataTypes.STRING,
  allowNull: false,
 },
room: {
 type: DataTypes.STRING,
 allowNull: false,
},
description: {
 type: DataTypes.STRING,
},
price: {
 type: DataTypes.INTEGER,
 allowNull: false,
},
capacity: {
 type: DataTypes.INTEGER,
 allowNull: false,
},
active:{
 type: DataTypes.BOOLEAN,
 allowNull: false,
 //valor por defecto en true
 defaultValue: true
}
 })


 module.exports = { Room }