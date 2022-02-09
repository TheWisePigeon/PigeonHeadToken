const express = require('express')
const ipfs = require("ipfs")
const bp = require('body-parser')
const app = express()
app.use(bp.urlencoded({ extended: true }))
app.use(express.static('public'))
app.set('view engine', 'ejs')

app.get('/', (req, res)=>{
    res.sendFile(__dirname + "/pages/index.html")

})
.get('/register', (req, res)=>{
    res.sendFile(__dirname + "/pages/register.html")
})
.get('/thanks', (req, res)=>{
    res.sendFile(__dirname + "/pages/thanks.html")
})

const PORT = process.env.PORT || 3000

app.listen(PORT, ()=>{
    console.log("App listening on port " + PORT);
    

})