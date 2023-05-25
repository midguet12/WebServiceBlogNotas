var mysql = require('mysql2');

function getConnection(){
    let connection = mysql.createConnection({
        host: "mysqluv2023.ddns.net",
        user: "uv",
        password: "Okmijn0798",
        database: 'blognotas'
      });
      return connection;
}
module.exports = { getConnection }