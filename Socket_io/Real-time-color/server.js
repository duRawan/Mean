const express = require("express");
const app = express();
const server = app.listen(8000);
app.use(express.static(__dirname + "/static"));
app.use(express.urlencoded({ extended: true }));//for post !
app.set('view engine', 'ejs');//ejs in the views 
app.set('views', __dirname + '/views');//after setting we will get the information from the page

const io = require('socket.io')(server);
io.on('connection', function (socket) { //2
    socket.on("background_color", function (data) {
        console.log(data)
        socket.emit("update_color", { color: data.color });
        socket.broadcast.emit("update_color", { color: data.color });
    });
});
app.get("/", (req, res) => {
    // console.log(req.body)
    res.render('index');
})