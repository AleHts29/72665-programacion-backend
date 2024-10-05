const fs = require('fs').promises;
const moment = require('moment');


// Datos a escribir en el archivo JSON
const data = {
    nombre: "Juan Perez",
    edad: 30,
    ciudad: "Buenos Aires",
    fecha: moment().format('YYYY-MM-DD HH:mm:ss') // Usar moment para la fecha y hora
};

// Nombre del archivo JSON
const nombreArchivo = 'datos.json';



const escribirArchivoJSON = async (filename, data) => {
    try {
        const jsonData = JSON.stringify(data, null, 2);
        await fs.writeFile(filename, jsonData);
        console.log('Archivo JSON creado y contenido escrito.');
    } catch (error) {
        console.error(`Error al escribir en el archivo: ${err}`);
    }
}

const leerArchivoJSON = async (filename) => {
    try {
        const data = await fs.readFile(filename, 'utf8');
        const jsonData = JSON.parse(data);
        console.log('Contenido del archivo JSON:');
        console.log(jsonData);
    } catch (error) {
        console.error(`Error al leer  el archivo: ${err}`);
    }
}

const main = async () => {
    await escribirArchivoJSON(nombreArchivo, data)
    await leerArchivoJSON(nombreArchivo)
}


main()
