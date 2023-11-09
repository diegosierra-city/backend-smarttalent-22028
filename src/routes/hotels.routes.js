const { Router } = require('express');
//
const {getHotels, getHotel, createHotel, updateHotel, deleteHotel,searchRooms,getCities} = require('../controllers/hotels.controller')

const router = Router();

router.get('/hotels', getHotels);
router.get('/cities', getCities);
router.get('/hotel/:id', getHotel);
router.post('/hotel', createHotel);
router.post('/hotels/search', searchRooms);
router.put('/hotel/:id', updateHotel);
router.delete('/hotel/:id', deleteHotel);

module.exports = router;