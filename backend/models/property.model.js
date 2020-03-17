const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PropertySchema = new Schema({
    property_name: String,
    city: {type: String, required: true},
    state: {type: String, required: true},
    zipCode: {type: String, required: true},
    bedrooms: Number,
    bathrooms: Number,
    pets_allowed: String,
    laundry: String,
    parking: String

});

const Property = mongoose.model('Property', PropertySchema);

module.exports = Property;
