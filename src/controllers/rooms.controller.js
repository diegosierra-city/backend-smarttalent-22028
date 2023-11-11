const {Room} = require('../models/Room')

const getRooms = async (req,res) => {
 const {hotelId} = req.params
 try {
  //throw new Error('test error')
 const listRooms = await Room.findAll({
  where:{
hotelId,
active:true
  }
 })
 //console.log(listRooms)
 //res.json(listRooms)
 return res.status(200).json(listRooms) 
 } catch (error) {
  //console.log('error:',error)
  return res.status(402).json(error.message) 
 }
    //res.send('get rooms')
//
}

const getAllRooms = async (req,res) => {
  try {
   //throw new Error('test error')
  const listRooms = await Room.findAll({
   where:{
 active:true
   }
  })
  //console.log(listRooms)
  //res.json(listRooms)
  return res.status(200).json(listRooms) 
  } catch (error) {
   //console.log('error:',error)
   return res.status(402).json(error.message) 
  }
     
 }

 const getAllRoomsTotal = async (req,res) => {
  try {
   //throw new Error('test error')
  const listRooms = await Room.findAll()
  //console.log(listRooms)
  //res.json(listRooms)
  return res.status(200).json(listRooms) 
  } catch (error) {
   //console.log('error:',error)
   return res.status(402).json(error.message) 
  }
     
 }

const getRoom = async(req,res) => {
 const {id} = req.params
 try {
 const room = await Room.findByPk(id)
 if(!room) return res.senStatus(404)
 return res.status(200).json(room) 
 } catch (error) {
  //console.log('error:',error)
  return res.status(402).json(error.message) 
 }
   // res.send('get room')
}

const createRoom = async(req,res) => {
 //console.log(req)
 const {room_type,room,description,price, hotelId,capacity} = req.body
 try {
 const newRoom = await Room.create({room_type,room,description,price,hotelId,capacity})
 //console.log(newRoom)
 //res.json(newRoom)
 return res.status(200).json(newRoom)  
 } catch (error) {
  //console.log('error:',error)
  return res.status(402).json(error.message) 
 }
 //res.send('create rooms')
}

const updateRoom = async (req,res) => {
 const {id} = req.params
 const {room_type,room,description,price,capacity} = req.body
 try {
 const updateRoom = await Room.findByPk(id)
 updateRoom.room_type = room_type
 updateRoom.room = room
 updateRoom.description = description
 updateRoom.price = price
 updateRoom.capacity = capacity
 //
 await updateRoom.save()

 return res.status(200).json(updateRoom) 
 } catch (error) {
  //console.log('error:',error)
  return res.status(402).json(error.message) 
 }
 //res.send('Update room')
}

const deleteRoom = async(req,res) => {
 const {id} = req.params
 try {
 /* const newRoom = await Room.destroy({
  where:{
   id
  }
 }) */
 ///borrado logico
 const deleteRoom = await Room.findByPk(id)
 deleteRoom.active = false
 await deleteRoom.save()

 return res.sendStatus(204) ///only status
 } catch (error) {
  //console.log('error:',error)
  return res.status(402).json(error.message) 
 }
 //res.send('Delete rooms')
}

module.exports = {getRooms, getRoom, getAllRooms,getAllRoomsTotal, createRoom, updateRoom, deleteRoom}