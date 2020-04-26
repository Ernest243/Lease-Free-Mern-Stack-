const router = require('express').Router();
const User = require('../models/user.model');
const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require('../config/keys');

router.route('/').get((req, res) => {
    User.find()
     .then(users => res.json(users))
     .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/signUp').post((req, res) => {

    const newUser = new User({
        firstName: req.body.firstName, 
        lastName: req.body.lastName, 
        phoneNumber: req.body.phoneNumber, 
        email: req.body.email, 
        address: req.body.address, 
        city: req.body.city, 
        state: req.body.state, 
        zipCode: req.body.zipCode,
        password1: req.body.passwordU1,
    });

    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password1, salt, (err, hash) => {
          newUser.password1 = hash;
          newUser
            .save()
            .then(user => res.json(user))
            .catch(err => console.log(err));
        });
      });
});

router.post('/login').post((req, res) =>{
    const email = req.body.email;
    const password = req.body.password;

    User.findOne({email}).then(user =>{
        if(!user){
            return res.status(404).json({emailnotfound: "Email not found"});
        }

        bcrypt.compare(password, user.password).then(isMatch =>{
            if(isMatch){
                const payload = {
                    id : user.id,
                    name : user.firstName
                };

                jwt.sign(
                    payload,
                    keys.secretOrKey,
                    {expiresIn: 60*60*1000*2},
                    (err,token)=>{
                        res.json({success: true, token: "Bearer "+ token})
                    }
                );
            }
            else{
                return res.status(400).json({passwordincorrect: "Password Incorrect"});
            }
        });
    });
});

module.exports = router;