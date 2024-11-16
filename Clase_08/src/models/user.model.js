import mongoose from "mongoose";

const userCollection = "usuarios"

// Definimos el schema
const userSchema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    email: {
        type: String,
        required: true,
        unique: true
    },
    age: Number,
},
    {
        versionKey: false // Deshabilitar el parámetro "__v"
    }

)



export const userModel = mongoose.model(userCollection, userSchema)