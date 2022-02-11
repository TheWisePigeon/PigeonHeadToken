const admin = require('firebase-admin')
const keys = require('./keys')
const { initializeApp } = require('firebase/app')
const { getFunctions } = require('firebase/functions')
const { httpsCallable } = require('firebase/functions')
var serviceAccount = require('./admin.json')

const app = initializeApp({
    apiKey: keys.apiKey,
    authDomain: keys.authDomain,
    projectId: keys.projectId
})
admin.initializeApp({
    credential : admin.credential.cert(serviceAccount)
})
const functions = getFunctions(app)
const hi = httpsCallable(functions, 'sayHello')
hi().then((result)=>{
    console.log(result);
}).catch((error)=>{
    console.log(error.code, error.message, error.details);
})



// var db = admin.firestore()
// var docRef = db.collection('Users').doc('ne test').set({
//     hash: "test"
// }).then(()=>{
//     console.log("User created successfully :)");
// }).catch((error)=>{
//     console.log("Error writing :" , error);
// })


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
