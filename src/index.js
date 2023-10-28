const server = require('./app.js');
const { sequelize } = require('./db.js')
///import models

const { User } = require('./models/User.js');
const { Hotel } = require('./models/Hotel.js');
const { Room } = require('./models/Room.js');
const { Booking } = require('./models/Booking.js');
const { BookingPax } = require('./models/BookingPax.js');
//

sequelize.sync({alter: true}) // force :true /// alter:true
.then(()=>{
console.log('Database connected');
server.listen(3000)
console.log('Server is running on port 3000');
})
.catch((error)=>{
    console.error('Hay un error en la conexión a la Base de Datos: ',error)
})