const express = require('express')
const ipfs = require("ipfs")
const bp = require('body-parser')
const app = express()
app.use(bp.urlencoded({ extended: true }))
app.use(express.static('public'))
app.set('view engine', 'ejs')

app.get('/', (req, res)=>{
    res.render('pages/index')
    //res.sendFile(__dirname + "/index.html")

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