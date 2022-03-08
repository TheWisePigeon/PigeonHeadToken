const express = require('express')
const bp = require('body-parser')
const logic = require('./logic')
const ipfs = require('ipfs-http-client')
const app = express()
const { count } = require('./firebase')
const { createUser } = require('./firebase')
app.use(bp.urlencoded({ extended: true }))
app.use(express.static('public'))
app.set('view engine', 'ejs')

//userSchema
function User(name, pwd, refCode) {
    this.name = name
    this.password = pwd
    this.refCode = refCode
}


app.get('/', async (req, res)=>{
    res.render("pages/index.ejs")
    // const user = await logic.getData('QmeiUY5F4Bu3vdrWx3k2NeqApNtJWehXC8htaWeLWP9YPT')
    // const userData = JSON.parse(user)
    // console.log("username :" +userData.name);
    const  addr = "/ipfs/QmeiUY5F4Bu3vdrWx3k2NeqApNtJWehXC8htaWeLWP9YPT"

})

app.get('/register', (req, res)=>{
    res.render("pages/register.ejs")
})

app.post('/register', async (req, res)=>{
    let result = req.body
    let code = count+1
    let newUser = new User(result.name, result.pwd, refCode)

    const results = await logic.addData(JSON.stringify(newUser))
    createUser({hash: results, refCode: code})
    console.log("Process finished");
})

app.get('/login', (req, res)=>{
    res.render('pages/login.html')
})

app.post('/login', (req, res)=>{
    console.log("Post received")
})

app.get('/thanks', (req, res)=>{
    res.render("pages/thanks.ejs")
})

const PORT = process.env.PORT || 3000

app.listen(PORT, ()=>{
    console.log("App listening on port " + PORT);
})