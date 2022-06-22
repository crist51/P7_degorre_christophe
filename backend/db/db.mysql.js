const dotenv = require ('dotenv');
dotenv.config();

const mysql = require('mysql')

//-- params mySQL --

const mysqlconnection = mysql.createConnection({
    host: `${process.env.DB_host}`,
    database: `${process.env.DB_mysql}`,
    user: `${process.env.DB_user}`,
    password:`${process.env.DB_password}`
})
console.log('--> mysql Connection <--');

mysqlconnection.connect((err) => {
    if(err){
        console.log( `error conecting: ${err}`);
    }
});

module.exports = mysqlconnection;