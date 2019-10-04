const express = require("express");
const app = express();
app.listen(8000, () => console.log("listening on port 8000"));
const session = require('express-session');
app.use(session({
    secret: 'keyboardkitteh',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}))
app.use(express.static(__dirname + "/static"));
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');//ejs in the views 
app.set('views', __dirname + '/views');//after setting we will get the information from the page
app.get("/", (req, res) => {
    res.render('index');
})
app.post("/result", (req, res) => {
    console.log(req.body);
    res.render('results',{result:req.body});
})
