var firebase = require("firebase/app");
require("firebase/auth");
require("firebase/firestore");


const express = require('express');
const app = express();
const port = process.env.PORT || 4000;
const path = require("path"); //

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:4000");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

const createPost = require('./routes/createPost.js');
const getAllPosts = require('./routes/getAllPosts.js');


app.use(express.static(path.join(__dirname, "public")));

app.use("/", getAllPosts);
app.use("/create-post", createPost);

app.use("/form", (req, res) => 
 res.sendFile("/public/index.html", {root: __dirname}) 
);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));