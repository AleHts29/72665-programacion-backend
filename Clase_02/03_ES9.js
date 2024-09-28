//Y usemos un array de ejemplo:
const nombres = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanesa'];

console.log("\n************** Spread operator: ************ \n");
// const copiaNombres = [nombres] // me commplica la iteracion
const copiaNombres = [...nombres]
console.log(copiaNombres);


