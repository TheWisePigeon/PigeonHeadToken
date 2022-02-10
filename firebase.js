const admin = require('firebase-admin')
const { initializeApp } = require('firebase/app')
const { getFunctions } = require('firebase/functions')
var serviceAccount = require('./admin.json')

const app = initializeApp({
    apiKey: "AIzaSyCXQ1MLdMT9Uy8nnRSeiRS5AFcKsaSuyJc",
    authDomain: "pigeonhead-1d824.firebaseapp.com",
    projectId: "pigeonhead-1d824"
})
admin.initializeApp({
    credential : admin.credential.cert(serviceAccount)
})
console.log("g");
const functions = getFunctions(app)
console.log("h");

var db = admin.firestore()
var docRef = db.collection('Users').doc('ne test').set({
    hash: "test"
}).then(()=>{
    console.log("User created successfully :)");
}).catch((error)=>{
    console.log("Error writing :" , error);
})


// docRef.get().then((doc) => {
//     if (doc.exists) {
//         data = doc.data()
//         console.log(data.hash);
//     } else {
//         // doc.data() will be undefined in this case
//         console.log("No such document!");
//     }
// }).catch((error) => {
//     console.log("Error getting document:", error);
// });
