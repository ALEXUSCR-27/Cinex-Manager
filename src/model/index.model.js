const mysql = require('mysql');
const model = {}
const express = require('express');
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Smand.com2772",
    database: "cinepelicula",
    port: 3306
})

model.registrarPelicula = (values) => {
    return new Promise((resolve, reject) => {
        const titulo = values.body.titulo;
        const idioma = values.body.idioma;
        const director = values.body.director;
        const fecha = values.body.fecha;
        const genero = values.body.genero;
        const duracion = values.body.duracion;
        const edad = values.body.edad;
        const registroPelicula = "call proceInsertarPelicula ('"+titulo+"','"+director+"','"+idioma+"',"+edad+",'"+fecha+"','"+genero+"',"+duracion+");";
        console.log(registroPelicula);
        db.query(registroPelicula, (err, data) => {
            if (err) {
                console.log("[ERROR] => "+err);
                reject(err);
            }
            else {
                resolve(data);
            }
        });
    });

}


model.eliminarPelicula = (values) => {
    return new Promise((resolve, reject) => {
        console.log(values.body);
        const id = values.body.peliculaID;
        const eliminarPeli = "call proceEliminarPelicula("+id+");";
        console.log(eliminarPeli);
        db.query(eliminarPeli, (err, data) => {
            if (err) {
                console.log("[ERROR] => "+err);
                reject(err);
            }
            else {
                resolve(data);
            }
        });
    })
}

model.buscarPelicula = (values) => {
    return new Promise((resolve, reject) => {
        const titulo = values.body.titulo;
        const idioma = values.body.idioma;
        const fecha = values.body.fecha;
        const genero = values.body.genero;
        const buscarPeli = "call proceBuscarPelicula('"+titulo+"','"+genero+"','"+idioma+"','"+fecha+"');";
        console.log(buscarPeli);
        db.query(buscarPeli, (err, data) => {
            if (err) {
                console.log("[ERROR] => "+err);
                reject(err);
            }
            else {
                resolve(data);
            }
        });
    });
}


module.exports = model;