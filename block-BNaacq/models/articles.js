const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const articleSchema = new Schema({
    title: String,
    description: String,
    tags: [String],
    likes: Number,
    author: String, //-> ID of user
    comments: String,
})