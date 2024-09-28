//ES8
//Uso de Object.entries, Object.values, Object.keys 
//para un mejor control interno sobre las propiedades de un objeto.
const impuestos = {
    impuesto1: 2341,
    impuesto2: 341,
    impuesto3: 4611,
    impuesto4: 111
};

// let parLLaveValor = Object.entries(impuestos);
// console.log(parLLaveValor);

// let soloPropiedades = Object.keys(impuestos)
// console.log(soloPropiedades);

// let soloValores = Object.values(impuestos)
// console.log(soloValores);

// // Calcular el total de impuestos en valores
// let impuestoTotal = soloValores.reduce((valorAcumulado, valorActual) => {
//     console.log(`Valores: valorInicial: ${valorActual} y valorAcumulado: ${valorAcumulado}`);

//     return valorAcumulado + valorActual;
// })
// console.log(`Total de impuestos: ${impuestoTotal}`);


// Nullish
const user = {
    nombre: "Guido",
    edad: 32
}

// frontend
console.log(user.nombre); // Guido
console.log(user.apellido); // undefined

// user.apellido = "Sanguinetti"
const apellido = user.apellido ?? "No especificado"
console.log(apellido); // undefined