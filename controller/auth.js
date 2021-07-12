const { disabled } = require("../routes/pages");
const mysql = require("mysql");
const bcrypt = require('bcryptjs');


const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
});

exports.register = (req, res) => {


    const {name, email, password, passwordConfirm} = req.body
    

    db.query('SELECT email FROM users Where email = ?', [email],(error,results) => {
        if(error){
            console.log(error);
        }

        if( results.length > 0){
            return res.render('register',{
                message:'Email registrado'
            })
        }else if( password != passwordConfirm){
            res.send('Senhas erradas')
        }

            



    });
    console.log(req.body);

}