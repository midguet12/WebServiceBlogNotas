const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;
const prioridad = require("./DAO/Prioridad.js");
const libreta = require("./DAO/Libreta.js");
//prioridad.crear("Hola");
//prioridad.obtenerTodas();
//prioridad.buscarPorId(1);
//prioridad.borrar(1);
//libreta.crear("nombre1","#fff",0);
//libreta.actualizar(1,"nombre2","#ff1",0);
//libreta.obtenerTodas();
//libreta.buscarPorId(1);
//libreta.borrar(1);
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});