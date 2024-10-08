const { response } = require('express');
const model = require('../model/index.model');
const controller = {}

controller.agregarPelicula = (req, res) => {
    model.registrarPelicula(req)
    .then(response => {
    res.send(JSON.stringify(response));
    }).catch(error => {
        console.error(error);
        res.status(500).send("Error al agregar película");
    });
}

controller.buscarPelicula = (req, res) => {
    model.buscarPelicula(req)
    .then(response => {
    res.send(JSON.stringify(response));
    }).catch(error => {
        console.error(error);
        res.status(500).send("Error al agregar película");
    });
}

controller.eliminarPelicula = (req, res) => {
    model.eliminarPelicula(req)
    .then(response => {
    res.send(JSON.stringify(response));
    }).catch(error => {
        console.error(error);
        res.status(500).send("Error al agregar película");
    });
}

controller.modifyMovie = (req, res) => {
    model.modifyMovie(req)
    .then (response => {
        res.send(JSON.stringify(response));
    }).catch(error => {
        console.error(error);
        res.status(500).send("Error while trying to modify the movie");
    });
}

module.exports = controller;