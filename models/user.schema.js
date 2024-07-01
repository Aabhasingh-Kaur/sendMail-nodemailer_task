const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: String,
    email: String
}, { timestamp: true })


const UserCollection = mongoose.model("", userSchema);

module.exports = UserCollection;

console.log("Schema Working");