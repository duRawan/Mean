const express = require("express");
const app = express();
const server = app.listen(8000);
app.use(express.static(__dirname + "/static"));
app.use(express.urlencoded({ extended: true }));//for post !

app.set('view engine', 'ejs');//ejs in the views 
app.set('views', __dirname + '/views');//after setting we will get the information from the page

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/message_Board', { useNewUrlParser: true });
var Schema = mongoose.Schema;
const messageSchema = new mongoose.Schema({
    name: { type: String, required: true, minlength: 4 },
    message: { type: String, required: true },
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }]//referencing the schema name 
}, { timestamps: true })
// create an object to that contains methods for mongoose to interface with MongoDB
const Msg = mongoose.model('Message', messageSchema);

var commentSchema = new Schema({
    name: { type: String, required: true },
    comment: { type: String, required: true },
    _message: { type: Schema.Types.ObjectId, ref: 'Message' },
}, { timestamps: true });
const Cmt = mongoose.model('Comment', commentSchema);


app.post('/newMessage', (req, res) => {
    var new_message = new Msg(req.body);
    new_message.save(function(err){
        if(err)
            res.json(err);
        else
            res.redirect('/');
    })
});
app.post('/newComment/:id', function (req, res) {
    Msg.findOne({ _id: req.params.id }, function (err, message) {
        if (err)
            res.json(err);
        else {
            var new_comment = new Cmt({
                _message: req.params.id,
                name: req.body.name,
                comment: req.body.comment
            });
            console.log(new_comment)
            new_comment.save(function (err) {
                if (err)
                    res.json(err);
                else {
                    message.comments.push(new_comment._id);
                    message.save(function (err) {
                        if (err)
                            res.json(err);
                        else
                            res.redirect('/');
                    });
                };
            });
        };
    });
});
app.get('/',function(req,res){
    Msg.find({}).populate('comments').exec(function(err,messages){
        if(err)
            res.json(err);
        else{
            console.log(messages)
            res.render('index',{all_Msg:messages})
        }
    });
});