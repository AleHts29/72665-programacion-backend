import express from 'express';
import mongoose from 'mongoose';
import userRouter from './routes/user.router.js'




const app = express();
const PORT = 9090;

//Preparar la configuracion del servidor para recibir objetos JSON.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use("/api/users", userRouter)




app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})





// Connect to MongoDB
const URL_MONGO = 'mongodb+srv://c43395:admin@cluster0.lgoy2ny.mongodb.net/clase14?retryWrites=true&w=majority&appName=Cluster0'

const connectMongoDB = async () => {
    try {
        await mongoose.connect(URL_MONGO)
        console.log("Connected to Mongo SUCCESS!!!");
    } catch (error) {
        console.error("No se pudo conectar a la BD usando Moongose: " + error);
        process.exit();
    }
}
connectMongoDB()

