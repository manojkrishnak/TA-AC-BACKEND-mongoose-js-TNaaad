/*

Q. Add address Schema with fields

village -> String
city -> String
state -> String
pin -> number
user -> ObjectId of User from user schema


*/

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const addressSchema = new Schema({
  village: String,
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  pin: Number,
  user: mongoose.Types.ObjectId, //ObjectId of User from user schema
}, { timestamps: true });


const Address = mongoose.model("Address", addressSchema);

module.exports = Address;