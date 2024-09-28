
//Promesas
const dividirConPromesa = (dividendo, divisor) => {
    return new Promise((resolve, reject) => { //resolve y reject son funciones callback igualmente.
        console.log(`Recibiendo promesa para dividir: ${dividendo} / ${divisor}`);

        // Simular un tiempo de espera de 2 segundos (2000 milisegundos)
        setTimeout(() => {
            if (divisor === 0) {
                reject("No se puede dividir por cero.");
            } else {
                resolve(dividendo / divisor);
            }
        }, 5000); // Cambia este valor según el tiempo de espera deseado
    });
};



const dividirConPromesa_02 = (dividendo, divisor) => {
    return new Promise((resolve, reject) => { //resolve y reject son funciones callback igualmente.
        console.log(`Recibiendo promesa para dividir: ${dividendo} / ${divisor}`);

        if (divisor === 0) {
            reject("No se puede dividir por cero.");//La promesa no se puede cumplir para este caso...
        } else {
            resolve(dividendo / divisor); //OJO le estoy pasando el valor resultado de esta operación, 
            //Tambien podria definir otra funcion y devolver un resultado unico. 
        }
    });
};


const funcionAsincronica = async (a, b) => {
    try {
        // todo va bien...

        let result = await dividirConPromesa(a, b) // 5s

        let result_02 = await dividirConPromesa_02(a, result)

        console.log(result_02);

    } catch (error) {
        // si algo falla
        console.log("No se pudo cumplir la promesa, error: " + error);
    }
}

const test = async () => {
    try {
        // todo va bien...

        console.log("Otra funcion asyncronica");

    } catch (error) {
        // si algo falla
        console.log("No se pudo cumplir la promesa, error: " + error);
    }
}


funcionAsincronica(2, 5) // 5s
test()