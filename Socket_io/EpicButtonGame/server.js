const express = require("express");
const app = express();
const server = app.listen(8000);
app.use(express.static(__dirname + "/static"));
app.use(express.urlencoded({ extended: true }));//for post !
app.set('view engine', 'ejs');//ejs in the views 
app.set('views', __dirname + '/views');//after setting we will get the information from the page

const io = require('socket.io')(server);
var count = 0;
io.on('connection', function (socket) { //2
    socket.on("posting_form", function () {
        console.log(count);
        count++;
        io.emit("update_counter", { counter: count });
    });

    socket.on("reseting", function () {
        count = 0;
        io.emit("update_counter", { counter: count });
    });

});


app.get("/", (req, res) => {
    // console.log(req.body)
    res.render('index');
})

