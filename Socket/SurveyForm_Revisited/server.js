const express = require("express");
const app = express();
const server = app.listen(8000);
app.use(express.static(__dirname + "/static"));
app.use(express.urlencoded({ extended: true }));//for post !
app.set('view engine', 'ejs');//ejs in the views 
app.set('views', __dirname + '/views');//after setting we will get the information from the page

const io = require('socket.io')(server);
io.on('connection', function (socket) { //2
 socket.on("posting_form",function(data){
     console.log(data.FL)
     var random_num=Math.floor((Math.random()*1000)+1);
     socket.emit("updated_message",{response:data});
     socket.emit("random_number",{random:random_num});
 });   
});


app.get("/", (req, res) => {
    console.log(req.body)
    res.render('index');
})

app.post("/", (req, res) => {
    console.log(req.body)
    //res.redirect('/');
})
