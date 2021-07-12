const express = require("express");
const ep = express();
const authController = require('../controller/auth')



ep.post("/register", authController.register )

module.exports = ep;