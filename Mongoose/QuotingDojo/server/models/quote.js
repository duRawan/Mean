var mongoose = require('mongoose');
var UserSchema = new mongoose.Schema({
    name: { type: String },
    quote: { type: String }
}, { timestamps: true })
mongoose.model('User', UserSchema);