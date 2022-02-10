const mongoose = require("mongoose");
const Schema = mongoose.Schema;

console.log(Schema);

const userSchema = new Schema({
    id: Number,
    name: String,
    email: String
});

mongoose.model("User", userSchema);

module.exports = {
    userSchema
}