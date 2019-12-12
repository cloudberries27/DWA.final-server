const express = require('express');
const router = express.Router();
const firebase = require('firebase');

const firebaseConfig = {
    apiKey: "AIzaSyBHS-03PLjmfmFU8pvHeRcCyqCR95_anIE",
    authDomain: "dwa-final.firebaseapp.com",
    databaseURL: "https://dwa-final.firebaseio.com",
    projectId: "dwa-final",
    storageBucket: "dwa-final.appspot.com",
    messagingSenderId: "511680695515",
    appId: "1:511680695515:web:439151a4e828374d38d0fe"
};
if (!firebase.apps.length) { 
    firebase.initializeApp(firebaseConfig);
}
const db = firebase.firestore();

router.get("/", (req,res) => {
    let TitleVal = req.query.title ? req.query.title: '';
    let TextVal = req.query.text ? req.query.text: '';
    let UserIDVal = req.query.userID ? req.query.userID: ''; 

    db.collection("posts")
    .add({      
        Title: TitleVal,
        Text: TextVal,
        UserID: UserIDVal
    })
    .then(ref => res.send(ref)) 
    .catch(e => res.send(e));
} )

module.exports = router;