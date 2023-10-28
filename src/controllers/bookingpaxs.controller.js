const {BookingPax} = require('../models/BookingPax')

const getBookingPaxs = async (req,res) => {
 const {bookingId} = req.params
 try {
  //throw new Error('test error')
 const listBookingPaxs = await BookingPax.findAll({
  where:{
bookingId
  }
 })
 //console.log(listBookingPaxs)
 //res.json(listBookingPaxs)
 return res.status(200).json(listBookingPaxs) 
 } catch (error) {
  //console.log('error:',error)
  return res.status(402).json(error.message) 
 }
    //res.send('get bookingpaxs')
//
}

const getBookingPax = async(req,res) => {
 const {id} = req.params
 try {
 const bookingpax = await BookingPax.findByPk(id)
 if(!bookingpax) return res.senStatus(404)
 return res.status(200).json(bookingpax) 
 } catch (error) {
  //console.log('error:',error)
  return res.status(402).json(error.message) 
 }
   // res.send('get bookingpax')
}

const createBookingPax = async(req,res) => {
 //console.log(req)
 const {name,last_name,birthday,genere,document_type,document_number,email,phone,bookingId} = req.body
 try {
 const newBookingPax = await BookingPax.create({name,last_name,birthday,genere,document_type,document_number,email,phone,bookingId})
 //console.log(newBookingPax)
 //res.json(newBookingPax)
 return res.status(200).json(newBookingPax)  
 } catch (error) {
  //console.log('error:',error)
  return res.status(402).json(error.message) 
 }
 //res.send('create bookingpaxs')
}

const updateBookingPax = async (req,res) => {
 const {id} = req.params
 const {name,last_name,birthday,genere,document_type,document_number,email,phone} = req.body
 try {
 const updateBookingPax = await BookingPax.findByPk(id)
 updateBookingPax.name = name
 updateBookingPax.last_name = last_name
 updateBookingPax.birthday = birthday
 updateBookingPax.genere = genere
 updateBookingPax.document_type = document_type
 updateBookingPax.document_number = document_number
 updateBookingPax.email = email
 updateBookingPax.phone = phone
 //
 await updateBookingPax.save()

 return res.status(200).json(updateBookingPax) 
 } catch (error) {
  //console.log('error:',error)
  return res.status(402).json(error.message) 
 }
 //res.send('Update bookingpax')
}

const deleteBookingPax = async(req,res) => {
 const {id} = req.params
 try {
 /* const newBookingPax = await BookingPax.destroy({
  where:{
   id
  }
 }) */
 ///borrado logico
 const deleteBookingPax = await BookingPax.findByPk(id)
 deleteBookingPax.active = false
 await deleteBookingPax.save()

 return res.sendStatus(204) ///only status
 } catch (error) {
  //console.log('error:',error)
  return res.status(402).json(error.message) 
 }
 //res.send('Delete bookingpaxs')
}

module.exports = {getBookingPaxs, getBookingPax, createBookingPax, updateBookingPax, deleteBookingPax}