const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    short_description: String,
    speciality: String,
    experience:String,
    fees:String,
    full_description:String,
    education:String

});

module.exports = mongoose.model("Doctors_data", userSchema);