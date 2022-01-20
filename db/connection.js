// const mongoose = require('mongoose')
const mysql = require('mysql')

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: ""
})

// con.connect((err)=>{
//     if(err){
//         throw err;
//     }else {
//         console.log("Connected successfully");
//     }
// })

module.exports = {
    con
}