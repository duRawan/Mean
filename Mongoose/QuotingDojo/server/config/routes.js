var mongoose = require('mongoose');
var User = mongoose.model('User');
var quotes = require('../controllers/quotes.js');

module.exports = function(app){
    app.get('/', (req, res) => {
        res.render("index");
    });
    
    app.post('/quotes', (req, res) => {
        quotes.create(req,res);
    });
    
    app.get('/quotes', (req, res) => { 
        quotes.show(req, res);
    });
}