/*
Definiremos la función “mostrarLista”, la cual recibirá un arreglo con elementos como parámetro.

Si la lista está vacía, devolver un mensaje indicando “Lista vacía”.
Si la lista cuenta con elementos, mostrarlos 1 por 1 en consola. Finalizar el proceso devolviendo la longitud de la lista (Utilizar template strings)
Invocar la función con los casos de prueba.
*/

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function mostrarLista(arr) {
    // logica
    for (const elemento of arr) {
        console.log(elemento);
    }

    if (arr.length === 0) {
        console.log("Lista empty");
    }


    return `Tamaño de la lista: ${arr.length}`

}


// casos de prueba
// let resultado1 = mostrarLista([])
// console.log(resultado1);


let resultado2 = mostrarLista(array)
console.log(resultado2);

