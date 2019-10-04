const express = require("express");
const app = express();
app.listen(8000, () => console.log("listening on port 8000"));
app.use(express.static(__dirname + "/static"));//html pages 
app.set('view engine', 'ejs');//ejs in the views 
app.set('views', __dirname + '/views');//after setting we will get the information from the page
app.get("/cats", (req, res) => {
    res.render('cats');
 })
 app.get("/cars", (req, res) => {
    res.render('cars');
 })
 app.get("/cars/new", (req, res) => {
    res.render('NewCar');
 })
 app.get("/cuddle", (req, res) => {
     var cat_data=[
         {name:'cuddle',food:'spagetti',age:3,sleep_spot:'under the bed',num:1}
     ];
    res.render('details', {cat: cat_data});
 })
 app.get("/jami", (req, res) => {
    var cat_data=[
        {name:'jami',food:'beans',age:2,sleep_spot:'under the window',num:2}
    ];
   res.render('details', {cat: cat_data});
})
app.get("/zac", (req, res) => {
    var cat_data=[
        {name:'zac',food:'tona',age:1,sleep_spot:'on the fridge',num:3}
    ];
   res.render('details', {cat: cat_data});
})

 