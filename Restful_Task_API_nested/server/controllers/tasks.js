var mongoose = require("mongoose");
var Task = mongoose.model("Task");

module.exports = {

    show: function (req, res) {
        Task.find({}, function (err, task) {
            if (err) 
                res.json({ message: "Error!", error: err });
            
            else 
                res.json({ message: "Success!", task: task });
            
        });
    },

    show_one: function (req, res) {

        Task.find({ _id: req.params.id }, function (err, task) {
            if (err) 
                res.json({ message: "Error!", error: err });
            
            else 
                res.json({ message: "Success!", task: task });
            
        });
    },

    create: function (req, res) {
        var new_task= new Task({ title: req.body.title, description: req.body.description, completed: req.body.completed });
        new_task.save(function (err, task) {
            if (err) 
                res.json({ message: "Error!", error: err });
            
            else 
                res.json({ message: "Success!", added: true });
            
        });
    },

    update: function (req, res) {
        Task.findById(req.params.id, function (err, task) {
            if (err) {
                res.json({ message: "Error!", error: err });
            }
            else {
                if (req.body.title) {
                    task.title = req.body.title;
                }
                if (req.body.description) {
                    task.description = req.body.description;
                }
                if (req.params.completed) {
                    task.completed = req.body.completed;
                }
                task.save(function (err) {
                    if (err) {
                        res.json({ message: "Error!", error: err });
                    }
                    else {
                        res.json({ message: "Success!", task: task })
                    }
                });
            }
        });
    },

    delete: function (req, res) {
        Task.remove({ _id: req.params.id }, function (err) {
            if (err) 
                res.json({ message: "Error!", error: err });
            
            else 
                res.json({ message: "Success!", removed: true });
            
        });
    }
}