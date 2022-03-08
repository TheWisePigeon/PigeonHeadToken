const admin = require('firebase-admin')
const keys = require('./keys')
const {
    initializeApp
} = require('firebase/app')
const {
    getFunctions
} = require('firebase/functions')
const {
    httpsCallable
} = require('firebase/functions')
var serviceAccount = require('./admin.json')
const {
    firestore
} = require('firebase-admin')
const {
    async
} = require('@firebase/util')

const app = initializeApp({
    apiKey: keys.apiKey,
    authDomain: keys.authDomain,
    projectId: keys.projectId
})
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
})

const db = admin.firestore()

const functions = getFunctions(app)
const hi = httpsCallable(functions, 'sayHello')

const test = httpsCallable(functions, 'test')

const createUser = httpsCallable(functions, 'createUser')

//get number of users registered

async function getCount() {
    const snapshot = await db.collection("Users").get()
    const count = snapshot.size
    return count
}


module.exports = {
    count,
    createUser
}