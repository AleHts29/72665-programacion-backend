import { Router } from "express";
import { uploader } from "../utils.js";


const router = Router();

let pets = [];

// Enpoints

router.get("/", (req, res) => {
    res.send(pets);
})


router.post("/", (req, res) => {
    let pet = req.body
    console.log(pet);

    // asignacion de ID
    const numRamdom = Math.floor(Math.random() * 200 + 1)
    pet.id = numRamdom + pets.length

    // validamos
    if (!pet.nombre || !pet.especie) {
        return res.status(400).send('Todos los campos son obligatorios')
    }


    // agregar al array
    pets.push(pet)

    res.send({ status: 'success', msg: "Mascota Creada!!" })
})




/* =====================================
=               Multer                =
===================================== */
router.post("/profile", uploader.single('file'), (req, res) => {
    if (!req.file) {
        return response.status(400).send({ status: "error", mensaje: "No se adjunto archivo." });
    }
    console.log(req.file);

    // Persistimos una mascota con su foto
    let pet = req.body;
    pet.id = Math.floor(Math.random() * 20 + 1);
    pet.image = req.file.path;

    if (!pet.nombre || !pet.especie) {
        console.error("Mascota no es valida.");
        console.error(pet);
        res.status(400).send({ status: "Error", message: "Mascota invalida, verifique los datos de entrada." });
    } else {
        pets.push(pet);
        res.send({ status: "success", message: "Mascota agregada con éxito." });
    }
})



export default router;