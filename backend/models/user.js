var mongoose = require('mongoose');
var passportLocalMongoose = require('passport-local-mongoose');


var UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    firstName: String,
    lastName: String,
    streetAddress: String,
    city: String,
    state: String,
    zipCode: Number,
    role: String,
});

UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("user", UserSchema);