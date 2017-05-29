var express = require('express');
var app = express();

var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var port = process.env.PORT || 8080;

//Para rodar no mlab
mongoose.connect('mongodb://cruduser:webpuccrud@ds153521.mlab.com:53521/crudresponsivo');

//Para rodar localmente
//mongoose.connect('mongodb://localhost:27017/app_crud');

app.use(express.static('./public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', require('./user-route'));

app.listen(port, function() {
  console.log('Running port: ', port);
});