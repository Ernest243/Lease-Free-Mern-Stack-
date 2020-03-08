const express = require('express'),
    cors = require('cors');
    mongoose = require('mongoose'),
    passport = require('passport'),
    bodyParser = require('body-parser'),
    LocalStrategy = require('passport-local'),
    passportLocalMongoose = require('passport-local-mongoose');
require('dotenv').config();
const uri = process.env.ATLAS_URI;

//Server Initialization + MongoDB connection

mongoose.connect(uri,{
useNewUrlParser:true,
useUnifiedTopology: true,
useCreateIndex:true
});

const app = express();
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

app.use(require('express-session')({
    secret: "Login Successful",
    resave : false,
    saveUninitialized : false
}));


app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//Routes
const userRoutes = require('./routes/user');

app.use('/signUp', userRoutes);


app.listen(port, function(){

    console.log('Listening on port ' + port);
})