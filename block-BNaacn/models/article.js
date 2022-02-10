/*
Q. Create an article Schema with fields

title -> String
description -> String
tags -> String
createdAt -> Date, defaults to current date
likes -> Number, defaults to zero

*/

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema({
  title: String,
  description: String,
  tags: [String],
  createdAt: {
    type: Date,
  },
  likes: {
    type: Number,
    default: 0,
  }
});

const Article = mongoose.model("Article", articleSchema);

module.exports = Article;
