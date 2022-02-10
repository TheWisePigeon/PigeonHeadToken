const express = require('express')
const bp = require('body-parser')
const logic = require('./logic')
const app = express()
app.use(bp.urlencoded({ extended: true }))
app.use(express.static('public'))
app.set('view engine', 'ejs')

//userSchema
function User(name, pwd, balance) {
    this.name = name
    this.password = pwd
    this.balance = balance
}


app.get('/', (req, res)=>{
    res.sendFile(__dirname + "/pages/index.html")

})

app.get('/register', (req, res)=>{
    res.sendFile(__dirname + "/pages/register.html")
})

app.post('/register', async (req, res)=>{
    let result = req.body
    let newUser = new User(result.name, result.pwd, 2000)
    logic.totalSupply-=2000
    const results = await logic.addData(JSON.stringify(newUser))
    console.log(results);

})

app.get('/thanks', (req, res)=>{
    res.sendFile(__dirname + "/pages/thanks.html")
})

const PORT = process.env.PORT || 3000

app.listen(PORT, ()=>{
    console.log("App listening on port " + PORT);
})