const router = require('express').Router();
const User = require('../models/user.model');
const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

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

module.exports = router;