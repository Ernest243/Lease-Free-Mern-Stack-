const router = require('express').Router();
let Property = require('../models/property.model');

router.route('/').get((req, res) => {
    Property.find()
     .then(properties => res.json(properties))
     .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/newListing').post((req, res) => {
    const property_name = req.body.property_name;
    const city = req.body.city;
    const state = req.body.state;
    const zipCode = req.body.zipCode;
    const bedrooms = req.body.bedrooms;
    const bathrooms = req.body.bathrooms;
    const pets_allowed = req.body.pets_allowed;
    const laundry = req.body.laundry;
    const parking = req.body.parking;

    const newProperty = new Property({
        property_name,
        city,
        state,
        zipCode,
        bedrooms,
        bathrooms,
        pets_allowed,
        laundry,
        parking
    });

    newProperty.save()
      .then( () => res.json('Property added!'))
      .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
