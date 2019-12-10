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

let postArr = [];
db.collection('posts').get()
    .then(post => {            
            post.forEach(postData =>{
                postArr.push(postData.data());
            });            
            console.log('Posts', postArr);
        }
    )
    .catch(err => {
        console.log('error', err);
    })

router.get('/', (req, res) => {
    res.send(postArr);
});

module.exports = router;