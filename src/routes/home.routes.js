const express = require("express");
const homeController = require("../controllers/home.Controller");

const homeRoutes = express.Router();

homeRoutes.get("/", homeController.homeViewController);

module.exports = homeRoutes;
