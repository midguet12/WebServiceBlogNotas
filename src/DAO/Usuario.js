const con = require("./connection.js");

class Usuario{
    constructor (idUsuario,nombres,apellidos,tiempoRegistro,activo,celular,contrasena,ultimoTokenAcceso,tiempoUltimoAcceso,otp,tiempoActivacion){
        this.idUsuario = idUsuario;
        this.nombres = nombres;
        this.apellidos = apellidos;
        this.tiempoRegistro = tiempoRegistro;
        this.activo = activo;
        this.celular = celular;
        this.contrasena = contrasena;
        this.ultimoTokenAcceso = ultimoTokenAcceso;
        this.tiempoUltimoAcceso = tiempoUltimoAcceso;
        this.otp = otp;
        this.tiempoActivacion=tiempoActivacion;
    }
}
function crear(nombres,apellidos,tiempoRegistro,activo,celular,contrasena,ultimoTokenAcceso,tiempoUltimoAcceso,otp,tiempoActivacion){
    dbconnection = con.getConnection();
    dbconnection.connect(function(err){
        if(err) throw err;
        console.log('Conectado!');
        var sql = `INSERT INTO 
        usuario (
            nombres,
            apellidos,
            tiempoRegistro,
            activo,
            celular,
            contrasena,
            ultimoTokenAcceso,
            tiempoUltimoAcceso,
            otp,
            tiempoActivacion
            ) VALUES ('${nombres}',
            '${apellidos}',
            '${tiempoRegistro}',
            '${activo}',
            '${celular}',
            '${contrasena}',
            '${ultimoTokenAcceso}',
            '${tiempoUltimoAcceso}',
            '${otp}',
            '${tiempoActivacion}')`;
        dbconnection.query(sql,function(err,result){
            if(err) throw err;
            console.log('1 record inserted');
        })
    });
}
function actualizar(idUsuario,nombres,apellidos,tiempoRegistro,activo,celular,contrasena,ultimoTokenAcceso,tiempoUltimoAcceso,otp,tiempoActivacion){
    dbconnection = con.getConnection();
    dbconnection.connect(function(err){
        if(err) throw err;
        console.log('Conectado!');
        var sql = `UPDATE usuario SET 
        nombres = '${nombres}',
        apellidos = '${apellidos}',
        tiempoRegistro = '${tiempoRegistro}' ,
        activo = '${activo}',
        celular = '${celular}',
        contrasena = '${contrasena}',
        ultimoTokenAcceso = '${ultimoTokenAcceso}',
        tiempoUltimoAcceso = '${tiempoUltimoAcceso}',
        otp = '${otp}',
        tiempoActivacion= '${tiempoActivacion}'
        WHERE idUsuario = ${idUsuario}`;

        dbconnection.query(sql,function(err,result){
            if(err) throw err;
            console.log('1 record Modified');
        })
    });
}
function borrar(idUsuario){
    dbConnection = con.getConnection();
    dbConnection.connect(function(err) {
        if (err) throw err;
        var sql = `DELETE FROM usuario WHERE idUsuario = ${idUsuario}`;
        dbConnection.query(sql, function (err, result) {
          if (err) throw err;
          console.log("Number of records deleted: " + result.affectedRows);
        });
    });
}
function obtenerTodos(){
    dbConnection = con.getConnection();
    dbConnection.connect(function(err) {
        if (err) throw err;
        dbConnection.query("SELECT * FROM usuario", function (err, result, fields) {
            if (err) throw err;
            console.log(result);
            return result;
        });
    });
}
function buscarPorId(idUsuario){
    dbConnection = con.getConnection();
    dbConnection.connect(function(err) {
        if (err) throw err;
        var sql = `SELECT * FROM usuario WHERE  ${idUsuario}`;
        dbConnection.query(sql, function (err, result, fields) {
            if (err) throw err;
            console.log(result);
            return result;
        });
    });
} 
module.exports = {crear,actualizar,borrar,obtenerTodos,buscarPorId}