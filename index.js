const express = require('express')
const bp = require('body-parser')
const logic = require('./logic')
const ipfs = require('ipfs-http-client')
const app = express()
const { getCount } = require('./firebase')
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
    const user = await logic.getData('QmfWnhE7TD22nRiGLFzS9jkvHoNviSpkfotwtFUThwpd6s')
    const userData = JSON.parse(user)
    console.log(userData);
    //const  addr = "/ipfs/QmeiUY5F4Bu3vdrWx3k2NeqApNtJWehXC8htaWeLWP9YPT"

})

app.get('/register', (req, res)=>{
    res.render("pages/register.ejs")
})

app.post('/register', async (req, res)=>{
    let result = req.body
    let code = await getCount()
    console.log(code);
    let newUser = new User(result.name, result.pwd, code+1)

    const results = await logic.addData(JSON.stringify(newUser))
    console.log(results);
    createUser({hash: results.path, refCode: code})
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