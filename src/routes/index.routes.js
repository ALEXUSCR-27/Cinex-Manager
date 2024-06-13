const express = require('express');
const router = express.Router();
const controller = require('../controller/index.controller');


router.post("/agregarpeliculas", controller.agregarPelicula);
router.post("/buscarpeliculas", controller.buscarPelicula);
router.post("/eliminarPelicula", controller.eliminarPelicula);

module.exports = router;