## Una vez que corrobores que mongo está instalado en computador, a partir del cliente CLI, crear una base de datos de nombre “estudiantes” Agregar 5 estudiantes diferentes con los campos “nombre”, “apellido”, “curso”, “correo”. Puedes utilizar db.collection.insertMany() Una vez agregados, listar a los estudiantes de dicha colección y corroborar su persistencia.




```shell
db.estudiantes.insertMany([
    {
    nombre: "Juan",
    apellido: "Perez",
    curso: "Matemáticas",
    correo: "juan.perez@example.com"
    },
    {
    nombre: "María",
    apellido: "González",
    curso: "Historia",
    correo: "maria.gonzalez@example.com"
  },
  {
    nombre: "Pedro",
    apellido: "Sánchez",
    curso: "Ciencias",
    correo: "pedro.sanchez@example.com"
  },
  {
    nombre: "Laura",
    apellido: "Martínez",
    curso: "Inglés",
    correo: "laura.martinez@example.com"
  },
  {
    nombre: "Ana",
    apellido: "López",
    curso: "Arte",
    correo: "ana.lopez@example.com"
  }
])

```




