// mutable
let num = 12
num = "hola"

// console.log(num);


// no mutable
const num2 = 12
// num2 = "hola"

// console.log(num2);



/*=============================================
=                   Constantes Array          =
=============================================*/
// array of numbers
const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//               0  1  2  3  4  5  6  7  8  9 

// console.log("Original", myArray);


// console.log(myArray[5]);
// myArray[0] = 200
// console.log("Modificado", myArray);


// myArray = "hola"
// console.log(myArray);



/* =====================================
=               Constantes Obj         =
===================================== */

const myObj1 = { name: "Nico", edad: 25 }
console.log("myObj1", myObj1);

myObj1.name = "Juan"
// console.log(myObj1);

// myObj = "hola" // no te deja porque myObj esta definido como const

const myObj2 = { ...myObj1 } // Copia por referencia
// const myObj2 = myObj1 // Copia por Valor
console.log("myObj2", myObj2);

myObj2.pais = "Arg"

console.log("myObj2", myObj2);
console.log("myObj1", myObj1);





