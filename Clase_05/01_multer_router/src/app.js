import express from 'express';
import usersRoutes from './routes/users.routes.js';
import petsRoutes from './routes/pets.routes.js';
import __dirname from './utils.js';


const app = express();
const PORT = 9090

//Preparar la configuracion del servidor para recibir objetos JSON.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// configuracion diritorio public
app.use(express.static(__dirname + '/public/'));


// Routers
app.use('/api/user', usersRoutes);
app.use('/api/pet', petsRoutes);




app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
})