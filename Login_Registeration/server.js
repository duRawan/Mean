const express = require("express");
const app = express();
const server = app.listen(8000);

app.use(express.static(__dirname + "/static"));
app.use(express.urlencoded({ extended: true }));//for post !
app.set('view engine', 'ejs');//ejs in the views 
app.set('views', __dirname + '/views');//after setting we will get the information from the page


const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/Registration', { useNewUrlParser: true });
const { Schema } = mongoose;

//Set up login/registration
const UserSchema = new Schema({
    first_name: {
        type: String,
        required: [true, "First Name required to register"]
    },
    last_name: {
        type: String,
        required: [true, "Last Name required to register"]
    },
    email: {
        type: String,
        required: [true, "Must have a valid email"],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    birthday: {
        day: { type: Number, required: [true, "A birth day is required for registration"], min: 1, max: 31 },
        month: { type: Number, required: [true, "A birth month is required for registration"], min: 1, max: 12 },
        year: { type: Number, required: [true, "A birth year is required for registration"], min: 1900, max: 2018 }
    },
    password: {
        type: String,
        required: [true, 'A password is required'],
        minlength: 8,
    }
})
// create an object to that contains methods for mongoose to interface with MongoDB
var User = mongoose.model('User', UserSchema);
const bcrypt = require('bcrypt');

const session = require('express-session');
app.set('trust proxy', 1) // trust first proxy
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}))

const flash = require('express-flash');
app.use(flash());

app.get('/', (req, res) => {

    res.render("index")

});

app.post('/register', function (req, res) {
    const newUser = req.body
    User.create(newUser)
    bcrypt.hash(newUser.password, 10)
        .then((hashed_pass) => {

            newUser.password = hashed_pass;
            console.log(newUser)
            res.render('dashboard')
        })
        .catch((error) => {
            for (var key in error.errors) {
                req.flash('registration', error.errors[key].message);
            }
            // redirect the user to an appropriate route
            console.log(newUser)
            res.redirect('/')
        })
})

app.post('/login', function (req, res) {
    console.log("Hiii")
    User.find({ email: req.body.email })
        .then((user) => {
            bcrypt.hash(req.body.password, 10)
                .then((hashed_pass) => {
                    console.log(hashed_pass, req.body.email )
                    User.findOne({ email: req.body.email })
                        .then((user) => {
                            req.session = { first_name: user.first_name, last_name: user.last_name, email: user.email, birthday: user.birthday };
                            res.redirect('/dashboard')
                        })
                        .catch((error) => { 
                            for (var key in error.errors) {
                                req.flash('login', error.errors[key].message);
                            }                     
                            res.redirect('/')
                        })
                })
        .catch((error) => {
            for (var key in error.errors) {
                req.flash('login', error.errors[key].message);
            }  
            res.redirect('/dashboard')
        })
        })


})
app.get('/dashboard', (req, res) => {

    res.render("dashboard")

});