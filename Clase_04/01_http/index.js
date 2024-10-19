const http = require('http');
const PORT = 8080


const server = http.createServer((request, response) => {
    // respondemos al cliente un mensaje
    response.end("Mi primer  hola desde un server en NODEJS con `http` Nativo!!!")
})

server.listen(PORT, () => {
    console.log(`server listening on port ${PORT}`);
})