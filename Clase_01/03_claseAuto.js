class Auto {

    constructor(color, modelo) {
        this.color = color;
        this.modelo = modelo;
    }

    // Metodos
    frenar() {
        console.log('Se frena el auto');
    }

    acelerar() {
        console.log(`se acelerta el uato: ${this.modelo}`);
    }
}



// creamos instancia
const miAuto1 = new Auto("Azul", "Mustang");
const miAuto2 = new Auto("Negro", "Peugeot")
console.log(miAuto1);
console.log(miAuto2);

miAuto1.frenar();
miAuto1.acelerar();

miAuto2.frenar();
miAuto2.acelerar();

