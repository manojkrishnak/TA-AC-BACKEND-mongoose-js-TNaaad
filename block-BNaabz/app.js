const express = require("express");
const mongoose = require("mongoose");

mongoose.connect(
  "mongodb://127.0.0.1:27017/sample",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => console.log(err ? err : "connected to mongo")
);

const app = express();



app.get("/", function(req, res){
    res.send("Welcome to Mongoose");
})


app.listen(4444, () => console.log("connected on 4444"));