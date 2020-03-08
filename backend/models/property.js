var mongoose = require('mongoose');
var passportLocalMongoose = require('passport-local-mongoose');
var user = require('user');


var PropertySchema = new mongoose.Schema({

    streetAddress: String,
    city: String,
    state: String,
    zipCode: Number,
    underContract: Boolean,
    price: Number,
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("Property", PropertySchema);