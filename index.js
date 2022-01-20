const values = require("./token")
const connect = require("./db/connection")
const express = require('express')
const bp = require('body-parser')
const app = express()

app.get('/', (req, res)=>{
    res.sendFile(__dirname + "/pages/index.html" )

})

const port = 3000

app.listen(port, ()=>{
    console.log("App listening on port " + port);
    console.log(values.token.name);
    connect.con.connect((error)=>{
        console.log("Connected successfully");
    })

})