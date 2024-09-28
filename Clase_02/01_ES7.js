//ES7
//Uso de exponencial ** como remplazo de la funcion pow de la librería Math (Math.pow(base, exp)))
const valoresBase = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let exponenciales = valoresBase.map((base, index) => base ** index);
// console.log("valores del arreglo:");
// console.log(valoresBase);

// console.log("Elevando su valor base por su indice en el arreglo:");
// console.log(exponenciales);

//Array.includes: Corrobora si algún elemento existe en el arreglo:
const nombres = ["Juan", "Camilo", "Maria", "Ana"];

let nombreABuscar = "Ju"
if (nombres.includes(nombreABuscar)) {
    console.log(`${nombreABuscar} si existe en el array`);
} else {
    console.log(`${nombreABuscar} no existe en el array`);

}
