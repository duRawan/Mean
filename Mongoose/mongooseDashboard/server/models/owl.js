var mongoose = require('mongoose');
var owlSchema = new mongoose.Schema({
    name: { type: String, required: true, minlength: 4 },
    personality: { type: String, required: true, maxlength: 45 },
    age: { type: Number, required: true, maxlength: 3 },
    food: { type: String, required: true, maxlength: 20 },
    id: { type: Number, required: true, maxlength: 3 }
}, { timestamps: true })
// create an object to that contains methods for mongoose to interface with MongoDB
mongoose.model('owl', owlSchema);