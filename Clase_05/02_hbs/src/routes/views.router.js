import express from 'express';

const router = express.Router();

let food = [
    { name: "Hamburguesa", price: "100" },
    { name: "Banana", price: "40" },
    { name: "Soda", price: "20" },
    { name: "Ensalada", price: "20" },
    { name: "Pizza", price: "20" }
];



// APIs

router.get('/food', (req, res) => {
    let testUser = {
        name: "Hilda",
        last_name: "Martinez",
        role: 'user'
    }
    res.render('index', {
        user: testUser,
        isAdmin: testUser.role === 'admin',
        style: "index.css",
        food
    })
})




export default router