var mongoose = require('mongoose');
var User = mongoose.model('User');
module.exports = {
    show: function (req, res) {
        User.find()
            .then(data => res.render("quotes", { quotes: data }))
            .catch(err => res.json(err));
    },

    create: function (req, res) {
        const userData = req.body;
        User.create(userData)
            .then(newQuote => {
                console.log("Quote has been created", newQuote)
            })
            .catch(err => res.json(err));
        res.redirect('/quotes');
    }
};