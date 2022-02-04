const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    age:{
        type: Number, 
        min: 18,
        max: 36,
        required: true
    },
    username: {
        type: String, 
        lowercase: true,
        trim: true,
        minlength: 6,
        maxlength: 10
    },
    password: {
        type: String,
        minlength: 5,
        maxlength: 15
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
})