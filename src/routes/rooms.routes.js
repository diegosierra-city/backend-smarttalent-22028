const { Router } = require('express');
//
const {getRooms, getAllRooms, getRoom, createRoom, updateRoom, deleteRoom} = require('../controllers/rooms.controller')

const router = Router();

router.get('/rooms/hotel/:hotelId', getRooms);
router.get('/rooms', getAllRooms);
router.get('/room/:id', getRoom);
router.post('/room', createRoom);
router.put('/room/:id', updateRoom);
router.delete('/room/:id', deleteRoom);

module.exports = router;