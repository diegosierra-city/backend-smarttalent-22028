const express = require('express');
const cors = require('cors');
//const morgan = require('morgan');
//
const hotelsRoutes = require('./routes/hotels.routes');
const roomsRoutes = require('./routes/rooms.routes');
const usersRoutes = require('./routes/users.routes');
const bookingsRoutes = require('./routes/bookings.routes');
const bookingpaxsRoutes = require('./routes/bookingpaxs.routes');

const app = express();
// midleawares
app.use(express.json());
app.use(cors());
//app.use(morgan('dev'));


//app.use(cors());
app.use(hotelsRoutes)
app.use(roomsRoutes)
app.use(usersRoutes)
app.use(bookingsRoutes)
app.use(bookingpaxsRoutes)

module.exports = app;
