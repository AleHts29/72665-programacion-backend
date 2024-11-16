import { Router } from "express";
import { userModel } from '../models/user.model.js'

const router = Router();


// Enpoints

// GET /users
router.get('/', async (req, res) => {
    try {
        let users = await userModel.find()
        console.log(users);

        res.send({ result: "success", payload: users });
    } catch (error) {
        console.error("No se pudo obtener usuarios con moongose: " + error);
        res.status(500).send({ error: "No se pudo obtener usuarios con moongose", message: error });
    }
})


// POST /users
router.post('/', async (req, res) => {
    try {
        //TODO: hacer validaciones antes de guarda datos en la base de datos!!!
        let dataUser = req.body
        console.log(dataUser);

        let user = await userModel.create(dataUser)

        res.status(201).send({ result: "success", payload: user._id })
    } catch (error) {
        console.error("No se pudo obtener usuarios con moongose: " + error);
        res.status(500).send({ error: "No se pudo obtener usuarios con moongose", message: error });
    }
})



// PUT /users
router.put('/:id', async (req, res) => {
    try {
        let userUpdated = req.body;
        let user = await userModel.updateOne({ _id: req.params.id }, userUpdated)
        res.send({ result: "success", payload: user });
    } catch (error) {
        console.error("No se pudo actualizar usuario con moongose: " + error);
        res.status(500).send({ error: "No se pudo actualizar usuario con moongose", message: error });
    }
})



// DELETE /users
router.delete('/:id', async (req, res) => {
    try {
        let user = await userModel.deleteOne({ _id: req.params.id })
        res.send({ result: "success", payload: user });
    } catch (error) {
        console.error("No se pudo eliminar usuario con moongose: " + error);
        res.status(500).send({ error: "No se pudo eliminar usuario con moongose", message: error });
    }
})




export default router