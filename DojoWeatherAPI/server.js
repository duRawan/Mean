var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var path = require("path");


app.use(express.static(__dirname + "/public/dist/public"));
app.use(bodyParser.json());


mongoose.connect("mongodb://localhost/weather_api");
//require("./server/config/mongoose.js");
require("./server/config/routes.js")(app);

// this route will be triggered if any of the routes above did not match
app.all("*", (req,res,next) => {
    res.sendFile(path.resolve("./public/dist/public/index.html"))
});

app.listen(1337, function(){
    console.log("Listening on part: 1337");
})