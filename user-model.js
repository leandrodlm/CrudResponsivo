var restful = require('node-restful');
var mongoose = restful.mongoose;

var userSchema = new mongoose.Schema({
    nome: String,
    email: String,
    idade: Number,
    cargo: String,
    telefone: String
});

module.exports = restful.model('User', userSchema);
