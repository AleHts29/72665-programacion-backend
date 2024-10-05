// Realizar un programa que utilice la  dependencia momentjs  (deberá instalarse por npm install).
// Debe contar con una variable que almacene la fecha actual (utilizar moment())
// Debe contar con una variable que almacene sólo la fecha de tu nacimiento (utilizar moment).
// Validar con un if que la variable contenga una fecha válida (utilizar el método isValid());
// Finalmente, mostrar por consola cuántos días han pasado desde que naciste hasta el día de hoy. (utilizar el método diff()
// Extra: Cambia tu moment a la versión 1.6.0, al no ser la misma versión mayor, nota el cambio al correr el programa.



const moment = require('moment');


const fechaActual = moment()

// Almacenar la fecha de nacimiento (ejemplo: 15 de marzo de 1990)
const fechaNacimiento = moment('1990-09-18', 'YYYY-MM-DD');

// Validar la fecha de nacimiento
if (fechaNacimiento.isValid()) {
    console.log("La fecha de nacimiento es valida");


    // Calcular la diferencia en días entre la fecha de nacimiento y la fecha actual
    const diferenciaEnDias = fechaActual.diff(fechaNacimiento, 'days');

    console.log(`Han pasado ${diferenciaEnDias} días desde que naciste`);
} else {
    console.log("La fecha de nacimiento no es valida");
}