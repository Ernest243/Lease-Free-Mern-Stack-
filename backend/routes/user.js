const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get((req, res) => {
    User.find()
     .then(users => res.json(users))
     .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/signUp').post((req, res) => {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const phoneNumber = req.body.phoneNumber;
    const email = req.body.email;
    const address = req.body.address;
    const city = req.body.city;
    const state = req.body.state;
    const zipCode = req.body.zipCode;

    const newUser = new User({
        firstName, 
        lastName, 
        phoneNumber, 
        email, 
        address, 
        city, 
        state, 
        zipCode,
    });

    newUser.save()
      .then( () => res.json('User added!'))
      .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;