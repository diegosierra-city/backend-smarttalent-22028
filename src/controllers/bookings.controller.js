const {Booking} = require('../models/Booking')
const {BookingPax} = require('../models/BookingPax')

const getBookings = async (req,res) => {
 try {
  //throw new Error('test error')
 const listBookings = await Booking.findAll({
    where:{
        active: true
    }
 })
 //console.log(listBookings)
 //res.json(listBookings)
 return res.status(200).json(listBookings) 
 } catch (error) {
  //console.log('error:',error)
  return res.status(402).json(error.message) 
 }
    //res.send('get bookings')
//
}

const getBooking = async(req,res) => {
 const {id} = req.params
 try {
 const booking = await Booking.findByPk(id)
 if(!booking) return res.senStatus(404)
 return res.status(200).json(booking) 
 } catch (error) {
  //console.log('error:',error)
  return res.status(402).json(error.message) 
 }
    //res.send('get booking')
}

const createBooking = async(req,res) => {
 //console.log(req)
 //return res.status(401).json(req.body) 
 const {pax,dateIn,dateOut,price,emergency_name,emergency_phone,roomId} = req.body[0]
 const listPax = req.body[1]
 try {
 const newBooking = await Booking.create({pax,dateIn,dateOut,price,emergency_name,emergency_phone,roomId})
 //console.log(newBooking)
 //res.json(newBooking)
 ///registramos los pax
 for(paxData of listPax){
  await BookingPax.create({
  name: paxData.name,
  last_name: paxData.last_name,
  birthday: paxData.birthday,
  genere: paxData.genere,
  document_type: paxData.document_type,
  document_number: paxData.document_number,
  email: paxData.email,
  phone: paxData.phone,
  active: true,
  bookingId: newBooking.id
 })
 }
 
 return res.status(200).send('Reserva Creada')  
 } catch (error) {
  //console.log('error:',error)
  return res.status(400).json(error.message) 
 }
 //res.send('create bookings')
}

const updateBooking = async (req,res) => {
 const {id} = req.params
 const {pax,dateIn,dateOut,price,emergency_name,emergency_phone} = req.body
 try {
 const updateBooking = await Booking.findByPk(id)
 updateBooking.pax = pax
 updateBooking.dateIn = dateIn
 updateBooking.dateOut = dateOut
 updateBooking.price = price
 updateBooking.emergency_name = emergency_name
 updateBooking.emergency_phone = emergency_phone

 //
 await updateBooking.save()

 return res.status(200).json(updateBooking) 
 } catch (error) {
  //console.log('error:',error)
  return res.status(402).json(error.message) 
 }
 //res.send('Update booking')
}

const deleteBooking = async(req,res) => {
 const {id} = req.params
 try {

 ///borrado logico
 const deleteBooking = await Booking.findByPk(id)
 deleteBooking.active = false
 await deleteBooking.save()

 return res.sendStatus(204) ///only status
 } catch (error) {
  //console.log('error:',error)
  return res.status(402).json(error.message) 
 }
 //res.send('Delete bookings')
}


const getPaxsBooking = async(req,res) => {
    const {id} = req.params
    try {
    const listPax = await BookingPax.findAll({where:{bookingId:id}})
    return res.status(200).json(listPax) 
    } catch (error) {
     //console.log('error:',error)
     return res.status(402).json(error.message) 
    }
       //res.send('get booking')
   }

module.exports = {getBookings, getBooking, createBooking, updateBooking, deleteBooking,getPaxsBooking}