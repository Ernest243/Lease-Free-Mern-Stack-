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

router.route('/login').post((req, res) =>{
    const email = req.body.email;
    const password = req.body.password;
  
    // Find user by email
    User.findOne({ email }).then(user => {
      // Check if user exists
      if (!user) {
        return res.status(404).json({ emailnotfound: "Email not found" });
      }
  
      // Check password
      bcrypt.compare(password, user.password1).then(isMatch => {
        if (isMatch) {
          // User matched
          // Create JWT Payload
          console.log("User logged in");
          const payload = {
            id: user.id,
            name: user.name
          };
  
          // Sign token
          jwt.sign(
            payload,
            keys.secretOrKey,
            {
              expiresIn: 31556926 // 1 year in seconds
            },
            (err, token) => {
              res.json({
                success: true,
                token: "Bearer " + token
              });
            }
          );
        } else {
          return res
            .status(400)
            .json({ passwordincorrect: "Password incorrect" });
        }
      });
    });
});

module.exports = router;