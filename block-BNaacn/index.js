const express = require("express");
const mongoose = require("mongoose");
const app = express();

mongoose.connect(
  "mongodb://localhost:27017/test",
  { useNewUrlParser: true, useUnifiedTopology: true },
  function (err, data) {
    if (err) {
      console.log(err);
      return;
    }
    console.log("connected to db");
  }
);

app.get("/", function (req, res) {
  res.send("Hello");
});

app.listen(4444, function () {
  console.log("Running on 4444");
});
