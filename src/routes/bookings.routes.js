const { Router } = require('express');
//
const {getBookings, getBooking, createBooking, updateBooking, deleteBooking,getPaxsBooking} = require('../controllers/bookings.controller')

const router = Router();

router.get('/bookings', getBookings);
router.get('/bookings/:id', getBooking);
router.get('/bookings/:id/pax', getPaxsBooking);
router.post('/bookings', createBooking);
router.put('/bookings/:id', updateBooking);
router.delete('/bookings/:id', deleteBooking);

module.exports = router;