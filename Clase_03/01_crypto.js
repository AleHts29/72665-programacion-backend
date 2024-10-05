const crypto = require('crypto');
const fs = require('fs');

class UsersManager {

    static usuarios = []

    constructor() {
        // Si ya existe un archivo de usuarios, lo cargamos
        if (fs.existsSync('usuarios.json')) {
            const data = fs.readFileSync('usuarios.json', 'utf8');
            UsersManager.usuarios = JSON.parse(data);
        }
    }


    // Método para crear un usuario
    crearUsuario({ nombre, apellido, nombreUsuario, contrasena }) {
        // Hashear la contraseña usando SHA-256
        const hash = crypto.createHash('sha256').update(contrasena).digest('hex');

        // Crear un nuevo usuario
        const nuevoUsuario = {
            nombre,
            apellido,
            nombreUsuario,
            contrasena: hash, // Guardamos la contraseña hasheada
        };

        UsersManager.usuarios.push(nuevoUsuario)


        // Guardar en un archivo JSON para persistencia
        fs.writeFileSync('usuarios.json', JSON.stringify(UsersManager.usuarios, null, 2));
        console.log('Usuario creado y guardado correctamente.');
    }

    // Método para mostrar todos los usuarios
    mostrarUsuarios() {
        console.log('Lista de usuarios:');
        UsersManager.usuarios.forEach((usuario, index) => {
            console.log(`${index + 1}. Nombre: ${usuario.nombre}, Apellido: ${usuario.apellido}, Nombre de usuario: ${usuario.nombreUsuario}`);
        });
    }

    // Método para validar usuario
    validarUsuario(nombreUsuario, contrasena) {
        // Buscar el usuario en el arreglo estático
        const usuario = UsersManager.usuarios.find(user => user.nombreUsuario === nombreUsuario);

        if (!usuario) {
            console.log('Error: Usuario no encontrado.');
            return;
        }

        // Hashear la contraseña ingresada y compararla con la almacenada
        const hashIngresado = crypto.createHash('sha256').update(contrasena).digest('hex');


        if (usuario.contrasena === hashIngresado) {
            console.log('Logueado');
        } else {
            console.log('Error: Contraseña incorrecta.');
        }
    }
}

// Ejemplo de uso:

const usersManager = new UsersManager(); // siempre que instacio la clase se ejeuta el constructor

usersManager.crearUsuario(
    {
        nombre: 'Juan',
        apellido: 'Pérez',
        nombreUsuario: 'juanp',
        contrasena: '1234'
    }
)

usersManager.crearUsuario({
    nombre: 'Ana',
    apellido: 'Gómez',
    nombreUsuario: 'anag',
    contrasena: 'abcd'
});


// Mostrar usuarios
usersManager.mostrarUsuarios()


// Validar usuario
usersManager.validarUsuario('juanp', '1234');
usersManager.validarUsuario('juanp', 'abcd');
usersManager.validarUsuario('ana', 'abcd');
usersManager.validarUsuario('juanz', '1234');
usersManager.validarUsuario('juanp', '12345');
usersManager.validarUsuario('juanp', '1234');




// ejemplo archivo .json
/*
[
  {
    "nombre": "Juan",
    "apellido": "Pérez",
    "nombreUsuario": "juanp",
    "contrasena": "03ac674216f3e15c761ee1a5e255f067953623c8b388b4459e13f978d7c846f4"
  },
  {
    "nombre": "Ana",
    "apellido": "Gómez",
    "nombreUsuario": "anag",
    "contrasena": "88d4266fd4e6338d13b845fcf289579d209c897823b9217da3e161936f031589"
  }
]
*/


// ejemplo obj
/*
const obj = {
    nombre: 'Juan',
    apellido: 'Pérez',
    nombreUsuario: 'juanp',
    contrasena: '1234'
}
*/