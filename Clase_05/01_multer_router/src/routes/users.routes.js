import { Router } from "express";


const router = Router();


let users = [];


// Enpoints
router.get("/", (req, res) => {
    res.send(users);
})


router.post("/", (req, res) => {
    let user = req.body
    console.log(user);

    // asignacion de ID
    const numRamdom = Math.floor(Math.random() * 200 + 1)
    user.id = numRamdom + users.length

    // validamos
    if (!user.first_name || !user.last_name || !user.email || !user.password) {
        return res.status(400).send('Todos los campos son obligatorios')
    }


    // agregar al array
    users.push(user)

    res.send({ status: 'success', msg: "Usuario Creado" })
})


// UPDATE
router.put('/:userId', (req, res) => {
    let userId = parseInt(req.params.userId)
    let userUpdated = req.body;


    const userPosition = users.findIndex((u => u.id === userId));
    if (userPosition < 0) {
        return req.status(202).send({ status: "info", error: "Usuario no encontrado" });
    }

    // actualizamos el registro
    users[userPosition] = userUpdated


    res.send({ status: "Success", message: "Usuario Actualizado.", data: users[userPosition] }); //Si no se indica retorna status HTTP 200OK
})


// DELETE
router.delete('/:userId', (req, res) => {
    let userId = parseInt(req.params.userId)

    // tomamos el tamanio del array antes de elimanr el registro
    const usersSize = users.length; // 10


    // buscamos el registro por posicion
    const userPosition = users.findIndex((u => u.id === userId));
    if (userPosition < 0) {
        return req.status(202).send({ status: "info", error: "Usuario no encontrado" });
    }

    // eliminamos el registro
    users.splice(userPosition, 1); // 9

    if (users.length === usersSize) {
        return req.status(500).send({ status: "error", error: "Usuario no se pudo borrar." });
    }


    res.send({ status: "Success", message: "Usuario Eliminado.", data: users[userPosition] }); //Si no se indica retorna status HTTP 200OK

})



export default router;