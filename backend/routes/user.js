const router = require('express').Router();
const passport = require('passport');
var User = require('../models/user');

router.route('/').post((req, res) =>{
        var newUser = new User({
        username: req.body.username,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        streetAddress: req.body.streetAddress,
        city: req.body.city,
        state: req.body.state,
        zipCode: req.body.zipCode,
        role: req.body.role
    });
    User.register(new User({username: req.body.username}), 
                req.body.password, function(err, user){
        if(err){
            //Place error redirect!
            console.log(error);

        }
        passport.authenticate("local")(req, res, function(){
            //Place logged in redirect here!
        });
    });
});