const server = require('./app.js');
const { connDB } = require('./db.js')

connDB.sync({alter: true})
.then(()=>{
console.log('Database connected');
server.listen(3000)
console.log('Server is running on port 3000');
})
.catch((error)=>{
    console.error('Hay un error en la conexión a la Base de Datos: ',error)
})
