var mongoose = require('mongoose');

var Schema = new mongoose.Schema({
    name: String
}, { timestamps: true });
mongoose.model('People', Schema);