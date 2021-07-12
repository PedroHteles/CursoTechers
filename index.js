const express = require("express");
const mysql = require("mysql");
const ep = express();
const dotenv = require('dotenv')




dotenv.config({path: './.env'})



ep.set('view engine', 'ejs');
ep.use(express.static('public'));
ep.use(express.urlencoded({extended: false}));
ep.use(express.json());

const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
});

db.connect((error) => {
    if(error) {
        console.log(error)
    } else {
        console.log("MYSQL Conected")
    }
});


//rotas

ep.use('/',require('./routes/pages'));
ep.use('/auth',require('./routes/auth'));




ep.listen(8080 , () => {
    console.log('servidor aqui na porta 8080')
});