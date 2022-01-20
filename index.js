const express = require('express')
const bp = require('body-parser')
const app = express()

app.get('/', (req, res)=>{
    res.sendFile(__dirname + "/pages/index.html" )

})

const PORT = process.env.PORT || 3000

app.listen(PORT, ()=>{
    console.log("App listening on port " + PORT);
    

})