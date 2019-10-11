var mongoose = require('mongoose');
var Owl = mongoose.model('owl');
module.exports = {
    show: function (req, res) {
        Owl.find()
            .then(data => res.render("index", { owl_all: data }))
            .catch(err => res.json(err));
    },

    create: function (req, res) {
        const owl = req.body;
        Owl.create(owl)
            .then(newOwlData => console.log('Owl created: ', newOwlData))
            .catch(err => console.log(err));
        res.redirect('/Owl/' + req.body.id);
    },

    show_one: function (req, res) {
        console.log(req.params.id);
        Owl.findOne({ id: req.params.id })
            .then(data => res.render("show", { owl_one: data }))
            .catch(err => res.json(err));
    },
    editing: function (req, res) {
        Owl.findOne({ id: req.params.id })
            .then(data => res.render("edit", { owl_one: data }))
            .catch(err => res.json(err));
    },

    submiting_edit: function (req, res) {
        Owl.update({ id: req.params.id }, {
            name: req.body.name,
            personality: req.body.personality,
            age: req.body.age,
            food: req.body.food,
        }, function (err, owl) {
            if (err)
                console.log("Error matching DB request");
            else
                res.redirect("/Owl/" + req.params.id);
        });
    },
    destroy: function (req, res) {
        Owl.remove({ id: req.params.id })
            .then(deletedOwl => {
                console.log("an Owl has been deleted")
                res.redirect('/')
            })
            .catch(err => res.json(err));
    }

};