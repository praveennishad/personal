process.env.NODE_ENV = process.env.NODE_ENV || 'development';
//var mongoose = require('./config/mongoose');
var express = require('./config/express');
//passport = require('./config/passport');

var app = express();
//var db = mongoose();
//var passport = passport();
var port1 = 3000;
var port1 = process.env.PORT || 8080;
app.listen(port1);
module.exports = app;
//console.log('Server running at http://localhost:3000/');