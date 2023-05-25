const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;
const prioridad = require("./DAO/Prioridad.js");
const libreta = require("./DAO/Libreta.js");
const usuario = require("./DAO/Usuario.js");
//prioridad.crear("Hola");
//prioridad.obtenerTodas();
//prioridad.buscarPorId(1);
//prioridad.borrar(1);
//libreta.crear("nombre1","#fff",0);
//libreta.actualizar(1,"nombre2","#ff1",0);
//libreta.obtenerTodas();
//libreta.buscarPorId(1);
//libreta.borrar(1);
//usuario.crear("Agni","Yañez-Vences","10/01/23",1,"2281196352","a1g2n3i4","1234","10/01/23","1234","12/01/23");
//usuario.actualizar(1,"Zahir","Yañez-Vences","10/01/23",1,"2281196352","a1g2n3i4","1234","10/01/23","1234","12/01/23");
//usuario.obtenerTodos();
//usuario.buscarPorId(1);
//usuario.borrar(1);
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});