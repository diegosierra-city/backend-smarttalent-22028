const { Router } = require('express');
//
const {getRooms, getRoom, createRoom, updateRoom, deleteRoom} = require('../controllers/rooms.controller')

const router = Router();

router.get('/rooms/hotel/:hotelId', getRooms);
router.get('/rooms/:id', getRoom);
router.post('/rooms', createRoom);
router.put('/rooms/:id', updateRoom);
router.delete('/rooms/:id', deleteRoom);

module.exports = router;