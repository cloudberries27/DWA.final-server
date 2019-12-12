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

router.get("/:id", (req, res) => {
    let queryId = req.params.id; 
    let docRef = db.collection("posts"); 
    let query = docRef
        .where("userID", "==", queryId)
        .get()
        .then(snapshot => {
            if (snapshot.empty) {
                console.log("No matches");
                return;
            }
            snapshot.forEach(doc => {
                console.log(doc.id, "=>", doc.data());
            });
        })
        .catch(err => {
            console.log("error", err);
        });

            res.send(query);

});



//we're exporting the router here.
module.exports = router;