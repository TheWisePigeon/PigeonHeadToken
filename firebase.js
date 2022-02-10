const admin = require('firebase-admin')
var serviceAccount = require('./admin.json')

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)

})

var db = admin.firestore()
var docRef = db.collection('Users').doc('new test').set({
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
