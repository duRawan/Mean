var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var path = require("path");

app.use(express.static(__dirname + "/client/static"));
app.use(express.urlencoded({ extended: true }));//for post !
app.set('view engine', 'ejs');//ejs in the views 
app.set('views', __dirname + '/client/views');//after setting we will get the information from the page
require('./server/config/mongoose.js');
var routes_setter = require('./server/config/routes.js');
routes_setter(app);
app.listen(8000, function(){console.log("listening on port 8000")});

