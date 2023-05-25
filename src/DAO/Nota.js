const con = require("./connection.js");

class Nota{
    constructor (idNota,titulo,contenido,tiempoCreacion,idUsuarioCreacion,eliminado,idLibreta,idPrioridad){
        this.idNota = idNota;
        this.titulo = titulo;
        this.contenidb = contenido;
        this.tiempoCreacion = tiempoCreacion;
        this.idUsuarioCreacion = idUsuarioCreacion;
        this.eliminado = eliminado;
        this.idLibreta = idLibreta;
        this.idPrioridad = idPrioridad;
    }
}
function crear(nombre,colorHexadecimal,idUsuario){
    dbconnection = con.getConnection();
    dbconnection.connect(function(err){
        if(err) throw err;
        console.log('Conectado!');
        var sql = `INSERT INTO libreta (nombre,colorHexadecimal,idUsuario) VALUES ('${nombre}','${colorHexadecimal}','${idUsuario}')`;
        dbconnection.query(sql,function(err,result){
            if(err) throw err;
            console.log('1 record inserted');
        })
    });
}
function actualizar(idLibreta,nombre,colorHexadecimal,idUsuario){
    dbconnection = con.getConnection();
    dbconnection.connect(function(err){
        if(err) throw err;
        console.log('Conectado!');
        
        var sql = `UPDATE libreta SET 
        nombre = '${nombre}', 
        colorHexadecimal = '${colorHexadecimal}', 
        idUsuario = '${idUsuario}' 
        WHERE idLibreta = '${idLibreta}'`  ;

        dbconnection.query(sql,function(err,result){
            if(err) throw err;
            console.log('1 record Modified');
        })
    });
}
function borrar(idLibreta){
    dbConnection = con.getConnection();
    dbConnection.connect(function(err) {
        if (err) throw err;
        var sql = `DELETE FROM libreta WHERE idLibreta = ${idLibreta}`;
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
        dbConnection.query("SELECT * FROM libreta", function (err, result, fields) {
            if (err) throw err;
            console.log(result);
            return result;
        });
    });
}
function buscarPorId(idLibreta){
    dbConnection = con.getConnection();
    dbConnection.connect(function(err) {
        if (err) throw err;
        var sql = `SELECT * FROM libreta WHERE  ${idLibreta}`;
        dbConnection.query(sql, function (err, result, fields) {
            if (err) throw err;
            console.log(result);
            return result;
        });
    });
} 
module.exports = {crear,actualizar,borrar,obtenerTodas,buscarPorId}