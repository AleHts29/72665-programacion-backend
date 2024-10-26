import express from 'express';
import usersRoutes from './routes/users.routes.js';
import petsRoutes from './routes/pets.routes.js';
import __dirname from './utils.js';
import handlebars from 'express-handlebars';
import viewRouter from './routes/views.router.js';

const app = express();
const PORT = 9090

//Preparar la configuracion del servidor para recibir objetos JSON.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// configuracion diritorio public
app.use(express.static(__dirname + '/public/'));


// configuracion de HBS
app.engine('handlebars', handlebars.engine())
app.set('views', __dirname + '/views')
app.set('view engine', 'handlebars')


app.get('/hello', (req, res) => {
    // usuario de prueba
    let testUser = {
        name: 'Santiago',
        last_name: 'Kosacoff',
        edad: 26
    }
    res.render('hello', testUser);
})




// Routers
app.use('/api/user', usersRoutes);
app.use('/api/pet', petsRoutes);


// usando router y hbs
app.use('/hbs', viewRouter);



app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
})