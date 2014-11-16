var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var clienteSchema = new Schema({
    name: String,
    age: Number
});

var clienteModel = mongoose.model('Clientes', clienteSchema);

module.exports = clienteModel;
