const mysql = require('mysql');

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Smand.com2772",
    database: "cinepelicula",
    port: 3306
})

exports.registrarPelicula = function (values) {
    console.log("si llego");
    const sql = "select * from generos;";
    db.query(sql, (err, data) => {
        if (err) {
            console.log("[ERROR] => "+err);
            return err;
        }
        console.log("Se realizo un registro en la base de datos");
        return true;
    })


}
