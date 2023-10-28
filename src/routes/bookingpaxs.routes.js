const { Router } = require('express');
//
const {getBookingPaxs, getBookingPax, createBookingPax, updateBookingPax, deleteBookingPax} = require('../controllers/bookingpaxs.controller')

const router = Router();

router.get('/bookingpaxs/booking/:bookingId', getBookingPaxs);
router.get('/bookingpaxs/:id', getBookingPax);
router.post('/bookingpaxs', createBookingPax);
router.put('/bookingpaxs/:id', updateBookingPax);
router.delete('/bookingpaxs/:id', deleteBookingPax);

module.exports = router;