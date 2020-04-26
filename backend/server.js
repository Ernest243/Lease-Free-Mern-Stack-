const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport= require('passport');
const users = require('./routes/user')

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5001;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true});

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB connection established successfully");
})

app.use(passport.initialize());

require('./config/passport');

const userRouter = require('./routes/user');
app.use('/user', userRouter);
const propertyRouter = require('./routes/property');
app.use('/property', propertyRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})
