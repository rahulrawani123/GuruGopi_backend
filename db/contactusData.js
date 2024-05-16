const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    mobile_no: String,
    email:String,
    message:String
});

module.exports = mongoose.model("Data", userSchema);