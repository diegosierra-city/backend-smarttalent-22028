const { Router } = require('express');
//
const {getHotels, getHotel, createHotel, updateHotel, deleteHotel,searchRooms} = require('../controllers/hotels.controller')

const router = Router();

router.get('/hotels', getHotels);
router.get('/hotels/:id', getHotel);
router.post('/hotels', createHotel);
router.post('/hotels/search', searchRooms);
router.put('/hotels/:id', updateHotel);
router.delete('/hotels/:id', deleteHotel);

module.exports = router;