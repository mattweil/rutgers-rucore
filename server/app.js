const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

var path = require('path');

mongoose.Promise = global.Promise;

const app = express();


app.use(express.static('public'));

var ruclassDB = mongoose.createConnection('mongodb://localhost/ruclass');
var rusnipeDB = mongoose.createConnection('mongodb://localhost/rusnipe');

app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs')

// if (process.env.NODE_ENV === 'test') {
//   mongoose.createConnection('mongodb://localhost/ruclass', { useMongoClient: true });
// } else {
//   var ruclassDB = mongoose.createConnection('mongodb://localhost/ruclass', { useMongoClient: true });
//   var rusnipeDB = mongoose.createConnection('mongodb://localhost/rusnipe', { useMongoClient: true });
// }

app.use(bodyParser.json());

// Routes
app.get('/', function (req, res) {
    res.render('index');
})

app.get('/mattweil.pdf', function (req, res) {
    res.send('mattweil.pdf');
})

app.use('/projects', require('./routes/projects'));

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})

module.exports = app;
