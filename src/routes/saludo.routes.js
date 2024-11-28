const express = require("express");
const saludoController = require("../controllers/saludo.Controller");
const saludoRoutes = express.Router();

saludoRoutes.get("/saludo", saludoController.saludoViewController);