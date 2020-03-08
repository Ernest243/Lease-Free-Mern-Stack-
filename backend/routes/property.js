const router = require('express').Router();
var property = require('../models/property');

router.route('/search/:id').get((req, res) =>{
    const id = req.params.id;
    property.find({streetAddress: `${id}`})
        .then(properties => res.json(properties))
        .catch(err => res.status(400).json('Error: ' + err));
});