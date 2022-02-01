const express = require('express')
const ipfs = require("ipfs")
const bp = require('body-parser')
const app = express()
app.use(bp.urlencoded({ extended: true }))
app.use(express.static(__dirname + '/public'))





app.get('/', (req, res)=>{
    res.sendFile(__dirname + "/pages/index.html" )

})

app.post('/', (req,res)=>{
    let result = req.body
    let name = result.name
    let email = result.email
    let password = result.password

    let user = {
        "name" : `${name}`,
        "email" : `${email}`,
        "password" : `${password}`
    }
    res.send(user)
    
    
})

const port = process.env.PORT || 3000

app.listen(port, ()=>{
    console.log("App listening on port " + port);

})