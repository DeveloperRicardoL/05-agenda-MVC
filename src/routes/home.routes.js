const express = require("express");
const {
  homeViewController,
  saludoViewController,
  logoutController
} = require("../controllers/home.Controller");

const homeRoutes = express.Router();

homeRoutes.get("/", homeViewController);
homeRoutes.get("/logout", logoutController);
homeRoutes.get("/saludo", saludoViewController);

module.exports = homeRoutes;