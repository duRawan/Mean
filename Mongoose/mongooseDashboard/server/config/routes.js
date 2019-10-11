var mongoose = require('mongoose');
var Owl = mongoose.model('owl');
var owls = require('../controllers/owls.js');

module.exports = function (app) {
    app.get('/', (req, res) => {
        owls.show(req, res);
    });

    app.post('/Owls', (req, res) => {
        owls.create(req, res)
    });

    app.get('/Owls/new', (req, res) => {
        res.render("new")
    });
    app.get('/Owl/:id', (req, res) => {
        owls.show_one(req, res)
    });
    app.get('/Owl/edit/:id', (req, res) => {
        owls.editing(req, res)
    });
    app.post('/Owl/edit_submit/:id', (req, res) => {
        owls.submiting_edit(req, res)
    });
    app.get('/Owl/destroy/:id', (req, res) => {
        owls.destroy(req, res)
    });
}