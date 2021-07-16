const express = require("express");
const ep = express();
const dotenv = require('dotenv')
const connection = require("./banco/banco");
const logintabela = require("./banco/Login");

connection.authenticate().then(() => {
    console.log("conectado ao mysql");
}).catch((erro) =>{
    console.log(erro)
})

dotenv.config({path: './.env'})



ep.set('view engine', 'ejs');
ep.use(express.static('public'));
ep.use(express.urlencoded({extended: false}));
ep.use(express.json());






//rotas

ep.use('/',require('./routes/pages'));

ep.post("/auth/register", (req, res) => {
    var usuario = req.body.email
    var senha = req.body.password

    logintabela.create({
        user:usuario,
        senha: senha
    }).then(() => {
        res.redirect('/')
    })
})




ep.listen(8080 , () => {
    console.log('servidor aqui na porta 8080')
});