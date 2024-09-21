class Contador {

    constructor(nombre) {
        this.nombre = nombre;
        this.valor = 0;

        // Variable estática para contar instancias
        if (typeof Contador.contadorGlobal === 'undefined') {
            Contador.contadorGlobal = 0;
        }

        Contador.contadorGlobal++;
    }

    // Metodos
    incrementar() {
        this.valor++;
    }

    decrementar() {
        this.valor--;
    }

    obtenerResponsable() {
        return this.nombre;
    }
    obtenerCuentaIndividual() {
        return this.valor;
    }


    static obtenerContadorGlobal() {
        return Contador.contadorGlobal;
    }
}

// Ejemplo de uso
const contador1 = new Contador('Responsable1');
const contador2 = new Contador('Responsable2');


contador1.incrementar();
contador1.incrementar();
contador2.incrementar();

console.log(`${contador1.nombre}: ${contador1.obtenerCuentaIndividual()}`);
console.log(`${contador2.nombre}: ${contador2.obtenerCuentaIndividual()}`);

console.log(`Contador Global de las instacias creadas: ${Contador.obtenerContadorGlobal()}`);
