class Persona {
    // Variable estática accesible por todas las instancias
    static contadorPersonas = 0;

    // Constructor para inicializar la instancia con un nombre
    constructor(nombre) {
        this.nombre = nombre;
        Persona.contadorPersonas++;
    }


    // Método para mostrar el nombre de la persona
    mostrarNombre() {
        console.log(`Hola, mi nombre es ${this.nombre}`);
    }


    // Método estático para acceder al contador de personas
    static mostrarContadorPersonas() {
        console.log(`Hay ${Persona.contadorPersonas} personas en total.`);
    }
}


// Crear dos instancias de la clase Persona
const persona1 = new Persona('Laura');
const persona2 = new Persona('Laura');


// Mostrar nombres de las instancias
persona1.mostrarNombre(); // Mi nombre es: Alejandro
persona2.mostrarNombre(); // Mi nombre es: Laura

Persona.mostrarContadorPersonas() // ??


// Comprobar la individualidad entre las instancias
console.log(persona1 === persona2);


/*
Comentarios sobre la clase Persona:

- Se ha utilizado un constructor para inicializar la instancia con un nombre.
- Se ha agregado un método para mostrar el nombre de la persona.
- Se ha creado una variable estática llamada contadorPersonas y se ha inicializado en 0.
- Se ha agregado un método estático para mostrar el número de personas que se han creado.
- Se ha comprobado la individualidad entre las instancias utilizando el operador ===.
- Se ha mostrado el nombre de las instancias y el número de personas creadas.

*/