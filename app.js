var firebase = require("firebase/app");
require("firebase/auth");
require("firebase/firestore");


const express = require('express');
const app = express();
const port = process.env.PORT || 4000;
const path = require("path"); //

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
const index = require('./routes/index.js');
const makePost = require('./routes/makePost.js');
const singlePost = require('./routes/singlePost.js');
const getallPosts = require('./routes/getallPosts.js');


app.use(express.static(path.join(__dirname, "public")));
app.use("/", index)
app.use("/make-post", makePost);
app.use("/single-post", singlePost);
app.use("/get-all-posts", getallPosts);


app.listen(port, () => console.log(`Listening on port ${port}!`));