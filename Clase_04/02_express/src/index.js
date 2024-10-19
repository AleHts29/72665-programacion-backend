import express from 'express';

const app = express();
const PORT = 8080;


// endpoint
app.get('/', (req, res) => {
    res.send("Welcome");
})
app.get('/saludo', (req, res) => {
    res.send({ nombre: 'Juan' });
})




/*
http://localhost/ ---> 127.0.0.1
*/

/**
 * Actividad en clase: Otras respuestas de Express
 */


app.get('/bienvenida', (req, res) => {
    res.send('<p style="color:blue"> Bienvenido a express, estoy unsando HTML como respuesta en un endpoint</p>');
})

app.get('/usuario', (req, res) => {
    res.send(
        {
            id: 1,
            nombre: 'Juan',
            apellido: 'Pérez',
            email: 'juan.perez@example.com'
        }
    );
})


/*=============================================
=         Usando req.params                  =
=============================================*/
app.get("/usuarios/:nombre/:apellido", (req, res) => {
    console.log(req.params);

    res.send(`Hola tu nombre completo es ${req.params.nombre} ${req.params.apellido}`);
})

/**
 * Ejemplo en vivo: Usando arreglos y request params
 */

const usuarios = [
    { id: 1, nomnbre: "Juan", apellido: "Torres", edad: "X", genero: "M" },
    { id: 2, nomnbre: "Carlos", apellido: "Garcia", edad: "20", genero: "M" },
    { id: 3, nomnbre: "Maria", apellido: "Torres", edad: "15", genero: "F" },
    { id: 4, nomnbre: "Patricia", apellido: "Ramirez", edad: "30", genero: "F" }
];


app.get("/usuarios/user-all", (req, res) => {
    res.send(usuarios);
})


app.get("/usuarios/:userId", (req, res) => {
    let userId = req.params.userId
    console.log(typeof userId);

    // tengo que hacer una busqueda
    const user = usuarios.find(u => u.id === parseInt(userId))
    if (!user) {
        res.status(404).send("User not found");
    }

    // devuelve el usuario
    res.send(user);
})



/*=============================================
=         Usando req.query                 =
=============================================*/

const consultas = []

// http://localhost:8080/ejemplo-query/query?nombre=Elias&apellido=Cafiero
app.get('/ejemplo-query/query', (req, res) => {
    // imprimimos los parámetros de la consulta
    console.log(req.query);

    consultas.push(req.query);

    res.send("data agregada con exito");
})

app.get("/ejemplo-query/data-all", (req, res) => {
    res.send(consultas);
})







app.listen(PORT, () => {
    console.log("listening on port " + PORT);

});