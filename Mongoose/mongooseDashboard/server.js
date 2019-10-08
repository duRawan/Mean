const express = require("express");
const app = express();
const server = app.listen(8000);
app.use(express.static(__dirname + "/static"));
app.use(express.urlencoded({ extended: true }));//for post !
app.set('view engine', 'ejs');//ejs in the views 
app.set('views', __dirname + '/views');//after setting we will get the information from the page
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/Owls_Dashboard', { useNewUrlParser: true });
const owlSchema = new mongoose.Schema({
    name: { type: String, required: true, minlength: 4 },
    personality: { type: String, required: true, maxlength: 45 },
    age: { type: Number, required: true, maxlength: 3 },
    food: { type: String, required: true, maxlength: 20 },
    id: { type: Number, required: true, maxlength: 3 }
}, { timestamps: true })
// create an object to that contains methods for mongoose to interface with MongoDB
const Owl = mongoose.model('owl', owlSchema);
app.get('/', (req, res) => {
    Owl.find()
        .then(data => res.render("index", { owl_all: data }))
        .catch(err => res.json(err));
});
app.get('/Owl/:id', (req, res) => {
    console.log(req.params.id);
    Owl.findOne({ id: req.params.id })
        .then(data => res.render("show", { owl_one: data }))
        .catch(err => res.json(err));
});

app.get('/Owls/new', (req, res) => {
    res.render("new")
});
app.post('/Owls', (req, res) => {
    const owl = req.body;
    Owl.create(owl)
        .then(newOwlData => console.log('Owl created: ', newOwlData))
        .catch(err => console.log(err));
    res.redirect('/Owl/' + req.body.id);
});
app.get('/Owl/edit/:id', (req, res) => {
    Owl.findOne({ id: req.params.id })
        .then(data => res.render("edit", { owl_one: data }))
        .catch(err => res.json(err));
});

app.post('/Owl/edit_submit/:id', (req, res) => {
    Owl.update({ id: req.params.id }, {
        name: req.body.name,
        personality: req.body.personality,
        age: req.body.age,
        food: req.body.food,
    },function(err,owl){
        if(err)
            console.log("Error matching DB request");
        else
            res.redirect("/Owl/"+req.params.id);
    });
});
app.get('/Owl/destroy/:id',(req,res)=>{
    Owl.remove({id: req.params.id})
    .then(deletedOwl => {
       console.log("an Owl has been deleted")
       res.redirect('/')
    })
    .catch(err => res.json(err));
});