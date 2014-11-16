var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var administratorSchema = new Schema({
    user: String,
    password: Number
});

var administratorModel = mongoose.model('Administrator', administratorSchema);

module.exports = administratorModel;
