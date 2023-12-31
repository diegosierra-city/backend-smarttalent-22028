const {Hotel} = require('../models/Hotel')
const {Room} = require('../models/Room')
const {Booking} = require('../models/Booking')
const { Op } = require("sequelize");

const getHotels = async (req,res) => {
 try {
  //throw new Error('test error')
 const listHotels = await Hotel.findAll()
 const listRooms = await Room.findAll()
 //console.log(listHotels)
 //res.json(listHotels)
 let listFinalHoteles
 let listFinalHabitaciones

 listHotels?listFinalHoteles=listHotels : listFinalHoteles=[]
 listRooms?listFinalHabitaciones=listRooms : listFinalHabitaciones=[]

 
 return res.status(200).json({'hoteles': listFinalHoteles, 'habitaciones': listFinalHabitaciones}) 
 } catch (error) {
  //console.log('error:',error)
  return res.status(402).json(error.message) 
 }
    //res.send('get hotels')
//
}

const getHotel = async(req,res) => {
 const {id} = req.params
 try {
 const hotel = await Hotel.findByPk(id)
 if(!hotel) return res.senStatus(404)
 return res.status(200).json(hotel) 
 } catch (error) {
  //console.log('error:',error)
  return res.status(402).json(error.message) 
 }
    res.send('get hotel')
}

const createHotel = async(req,res) => {
 //console.log(req)
 const {hotel,country,city,address,taxes} = req.body
 try {
 const newHotel = await Hotel.create({hotel,country,city,address,taxes})
  return res.status(200).json(newHotel)  
 } catch (error) {
  //console.log('error:',error)
  return res.status(402).json(error.message) 
 }
 //res.send('create hotels')
}

const updateHotel = async (req,res) => {
 const {id} = req.params
 const {hotel,country,city,address,taxes} = req.body
 try {
 const updateHotel = await Hotel.findByPk(id)
 updateHotel.hotel = hotel
 updateHotel.country = country
 updateHotel.city = city
 updateHotel.address = address
 updateHotel.taxes = taxes
 //
 await updateHotel.save()

 return res.status(200).json(updateHotel) 
 } catch (error) {
  //console.log('error:',error)
  return res.status(402).json(error.message) 
 }
 //res.send('Update hotel')
}

const deleteHotel = async(req,res) => {
 const {id} = req.params
 try {
 /* const newHotel = await Hotel.destroy({
  where:{
   id
  }
 }) */
 ///borrado logico
 const deleteHotel = await Hotel.findByPk(id)
 deleteHotel.active = false
 await deleteHotel.save()

 return res.sendStatus(204) ///only status
 } catch (error) {
  //console.log('error:',error)
  return res.status(402).json(error.message) 
 }
 //res.send('Delete hotels')
}


   const searchRooms = async (req, res) => {
    let { dateIn, dateOut, pax,city } = req.body;
   /*
    if(isNaN(Date.parse(dateIn))) {
        return res.status(400).send('Fecha inválida');
      }*/

  function filterHotelsWithRooms(hotels, rooms) {
  const hotelIds = new Set(rooms.map(r => r.hotelId));  
  return hotels.filter(h => hotelIds.has(h.id));
}

    try {
        const hotels = await Hotel.findAll({
          where: {
            city: city
          }
        });
        const rooms = await Room.findAll({
          where: {
            capacity: pax
          }
        });
        // buscamos las reservas para este rango de fechas
        const bookings = await Booking.findAll({
            where: {
                dateIn: { [Op.lte]: dateOut },
                dateOut: { [Op.gte]: dateIn }
            },
            attributes: ['roomId']
        }) 
        // se muestran solo las rooms que tecgan capacity igual o mayor que pax y que no este su id en el listado de bookings
        const finalRooms = rooms.filter(room => {
        return !bookings.includes(room.id) && room.capacity == pax
        })

        // Filtrar los hoteles que tienen su id en el array de habitaciones
const finalHotels = hotels.filter(hotel =>
  finalRooms.some(habitacion => habitacion.hotelId === hotel.id)
);

        //const finalHoteles = filterHotelsWithRooms(hotels, finalRooms)

          return res.status(200).json({finalHotels,finalRooms})    
    } catch (error) {
      //console.error(error);
      res.status(500).json({ message: error.message});
    }
  }

  const getCities = async (req,res) => {
    try {
    // buscar las diferentes city de la tabla Hotel sin que se repitan
    const cities = await Hotel.findAll({
        attributes: ['city'],
        group: ['city']
    })

        
    return res.status(200).json({cities})
    } catch (error) {
     //console.log('error:',error)
     return res.status(402).json(error.message) 
    }
       //res.send('get cities')
   //
   }
  

module.exports = {getHotels, getHotel, createHotel, updateHotel, deleteHotel,searchRooms, getCities}