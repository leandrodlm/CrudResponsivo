var express = require('express');
var router = express.Router();

var User = require('./user-model');

User.methods(['get', 'put', 'post', 'delete']);
User.register(router, '/user');

module.exports = router;
