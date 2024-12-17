const express = require("express");
const saludoViewController = require("../controllers/saludo.Controller");
const saludoRoutes = express.Router();

saludoRoutes.get("/saludo", saludoViewController);

module.exports = saludoViewController;