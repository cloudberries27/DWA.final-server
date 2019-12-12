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

let postRef = db.collection('posts');
let query = postRef.where('user', '==', 'IVWjDQk9xnQP1GWIOcf5f4AXpCM2').get()
  .then(snapshot => {
    if (snapshot.empty) {
      console.log('No matches');
      return;
    }  
    console.log(query);
    snapshot.forEach(doc => {
      console.log(doc.id, '=>', doc.data());
    });
  })
  .catch(err => {
    console.log('error', err);
  });



module.exports = router;