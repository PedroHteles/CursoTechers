const express = require("express");
const ep = express();



ep.post("/register", (req, res) => {
    var usuario = req.body.email
    var senha = req.body.password
    console.log(usuario,senha)
})

