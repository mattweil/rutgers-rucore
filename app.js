const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

var path = require('path');

mongoose.Promise = global.Promise;

const app = express();


app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs')

app.use(bodyParser.json());

// Routes

app.use('/', require('./routes/projects'));

app.listen(8080, function () {
    console.log('Listening on port 8080...')
})

module.exports = app;
