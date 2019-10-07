const express = require("express");
const app = express();
const server = app.listen(8000);
app.use(express.static(__dirname + "/static"));
app.use(express.urlencoded({ extended: true }));//for post !
app.set('view engine', 'ejs');//ejs in the views 
app.set('views', __dirname + '/views');//after setting we will get the information from the page
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/Quote_mongoose', { useNewUrlParser: true });
const UserSchema = new mongoose.Schema({
    name: { type: String },
    quote: { type: String }
}, { timestamps: true })
// create a constructor function for our model and store in variable 'User'
const User = mongoose.model('User', UserSchema);
app.get('/', (req, res) => {
    res.render("index");
});

app.post('/quotes', (req, res) => {
    const userData = req.body;
    User.create(userData)
        .then(newQuote => {
            console.log("Quote has been created", newQuote)
        })
        .catch(err => res.json(err));
    res.redirect('/quotes');
})

app.get('/quotes', (req, res) => {
    User.find()
        .then(data => res.render("quotes", { quotes: data }))
        .catch(err => res.json(err));
});