db.estudiantes.insertMany([
    { nombre: "Pedro", apellido: "Lopez", curso: "backend", correo: "micorreo@fgmail.com", edad: 25, sexo: "M" },
    { nombre: "Laura", apellido: "Suarez", curso: "marketing", correo: "micorreo@fgmail.com", edad: 27, sexo: "F" },
    { nombre: "German", apellido: "Caicedo", curso: "backend", correo: "micorreo@fgmail.com", edad: 22, sexo: "M" },
    { nombre: "Pedro", apellido: "David", curso: "backend", correo: "micorreo@fgmail.com", edad: 25, sexo: "M" },
    { nombre: "Pepino", apellido: "Spaghetti", curso: "react", correo: "micorreo@fgmail.com", edad: 32, sexo: "M" }
])

// Falta campo de Sexo
db.estudiantes.insertMany([
    { nombre: "Carla", apellido: "Dutra", curso: "backend", correo: "micorreo@fgmail.com", edad: 25 },
    { nombre: "Elias", apellido: "Cafiero", curso: "react", correo: "micorreo@fgmail.com", edad: 37 }
])

// COnsultas
// Realizar una búsqueda para obtener a todos los estudiantes.
colegio_c72665 > db.estudiantes.find()

// Realizar una búsqueda para obtener a todos los estudiantes de sexo H (hombre)
colegio_c72665 > db.estudiantes.find({ sexo: "H" })


// Realizar un conteo para obtener el número de documentos totales.
colegio_c72665 > db.estudiantes.countDocuments()


// Realizar un conteo para obtener el número de documentos totales que cumplan con el criterio: “Es mujer”
colegio_c72665 > db.estudiantes.countDocuments({ sexo: "F" })



// Ejemplo 02
db.estudiantes.insertMany([
    { nombre: "Guido", apellido: "Sanguinetti", curso: "backend", correo: "micorreo@fgmail.com", sexo: "M" },
    { nombre: "Lau", apellido: "Perez", curso: "marketing", correo: "micorreo@fgmail.com", edad: 27, sexo: "F" },
    { nombre: "Fabio", apellido: "Ruiz", curso: "backend", correo: "micorreo@fgmail.com", edad: 22, sexo: "M" },
    { nombre: "Elias", apellido: "Cafiero", curso: "backend", correo: "micorreo@fgmail.com", edad: 25, sexo: "M" },
    { nombre: "Carla", apellido: "Dutra", curso: "backend", correo: "micorreo@fgmail.com", edad: 32, sexo: "F" },
])


// Filtros
colegio_c72665 > db.estudiantes.find({ sexo: { $exists: true } })


// Filtros por nombre
colegio_c72665 > db.estudiantes.find({ nombre: "Carla" })
// [
//     {
//         _id: ObjectId('672f80029bcd70725682f138'),
//         nombre: 'Carla',
//         apellido: 'Dutra',
//         curso: 'backend',
//         correo: 'micorreo@fgmail.com',
//         edad: 25
//     },
//     {
//         _id: ObjectId('672f835d9bcd70725682f13e'),
//         nombre: 'Carla',
//         apellido: 'Dutra',
//         curso: 'backend',
//         correo: 'micorreo@fgmail.com',
//         edad: 32,
//         sexo: 'F'
//     }
// ]
colegio_c72665 > db.estudiantes.findOne({ nombre: "Carla" })
// {
//     _id: ObjectId('672f80029bcd70725682f138'),
//         nombre: 'Carla',
//             apellido: 'Dutra',
//                 curso: 'backend',
//                     correo: 'micorreo@fgmail.com',
//                         edad: 25
// }



// $lt significa "Less Than"
// $gt significa "greater than"
db.estudiantes.find({ nombre: 'Juan' })
db.estudiantes.find({ nombre: 'Juan', edad: 29 })

db.estudiantes.find({ $or: [{ curso: 'backend' }, { curso: 'react' }] })

db.estudiantes.find({ edad: { $gt: 25 } })

db.estudiantes.find({ edad: { $lte: 25 } })

db.estudiantes.find({ edad: { $ne: 25 } })

db.estudiantes.find({ edad: { $gte: 26, $lte: 35 } })



// Búsqueda Avanzada
db.estudiantes.distinct('curso')


colegio_c72665 > db.estudiantes.distinct('curso')
['backend', 'marketing', 'react']


// Proyecciones
db.estudiantes.find({}, { curso: 1, correo: 1 })


// Ordenamientos
colegio_c72665 > db.estudiantes.find().sort({ edad: -1 })


colegio_c72665 > db.estudiantes.find({}, { nombre: 1, apellido: 1, curso: 1 }).sort({ nombre: 1 });





// Ofset me mueve el punto de referencia
// 4
// 3
// 2 <--- ofset
// 1
// 0  
// -1
// -2
// -3
// -4

colegio_c72665 > db.estudiantes.find({}, { nombre: 1, apellido: 1, curso: 1 }).sort({ nombre: 1 }).skip(2)


// limit
colegio_c72665 > db.estudiantes.find({}, { nombre: 1, apellido: 1, curso: 1 }).sort({ nombre: 1 }).skip(2).limit(4)



// Update
colegio_c72665 > db.estudiantes.updateOne({ _id: ObjectId('672f835d9bcd70725682f13d') }, { $set: { edad: 38 } })



// Delete
colegio_c72665 > db.estudiantes.deleteOne({ _id: ObjectId('672f835d9bcd70725682f13e') })