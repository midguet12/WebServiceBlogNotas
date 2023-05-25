const con = require("./connection.js");

class Prioridad{
    constructor (idPrioridad,nombre){
        this.idPrioridad = idPrioridad;
        this.nombre = nombre;
    }
}
function crear(nombre){
    dbconnection = con.getConnection();
    dbconnection.connect(function(err){
        if(err) throw err;
        console.log('Conectado!');
        var sql = `INSERT INTO prioridad (nombre) VALUES ('${nombre}')`;
        dbconnection.query(sql,function(err,result){
            if(err) throw err;
            console.log('1 record inserted');
        })
    });
}
function borrar(idPrioridad){
    dbConnection = con.getConnection();
    dbConnection.connect(function(err) {
        if (err) throw err;
        var sql = `DELETE FROM prioridad WHERE idPrioridad = ${idPrioridad}`;
        dbConnection.query(sql, function (err, result) {
          if (err) throw err;
          console.log("Number of records deleted: " + result.affectedRows);
        });
    });
}
function obtenerTodas(){
    dbConnection = con.getConnection();
    dbConnection.connect(function(err) {
        if (err) throw err;
        dbConnection.query("SELECT * FROM prioridad", function (err, result, fields) {
            if (err) throw err;
            console.log(result);
            return result;
        });
    });
}
function buscarPorId(idPrioridad){
    dbConnection = con.getConnection();
    dbConnection.connect(function(err) {
        if (err) throw err;
        var sql = `SELECT * FROM prioridad WHERE  ${idPrioridad}`;
        dbConnection.query(sql, function (err, result, fields) {
            if (err) throw err;
            console.log(result);
            return result;
        });
    });
} 
module.exports = {crear,borrar,obtenerTodas,buscarPorId}