const express = require("express");
const mongoose = require("mongoose");
const User = require("./models/user");
const app = express();

mongoose.connect("mongodb://localhost", function(err){
    if(err){
        console.log(err);
        return;
    }
    console.log("Connected to db")
})

app.use(express.json());

app.get("/", function(req, res){
    res.send("Welcome to  CRUD App");
})

app.post("/users", function(req, res){
    const payload = req.body;
    User.create(payload, function(err, data){
        if(err){
            console.log(err);
            return;
        }
        res.send("saved info");
    })
})

app.get("/users", function(req, res){
    User.find({}, function(err, data){
        if(err){
            console.log(err);
            return;
        }
        res.send({users: data});
    })
})

app.get("/users/:id", function(req, res){
    const id = req.params.id;
    User.findById(id, function(err, data){
        if(err){
            console.log(err);
            return;
        }
        res.send(data)
    })
})

app.put("/user/:id", function(req, res){
    const id = req.params.id;
    User.updateOne({_id: id}, req.body, function(err, data){
        console.log(err)
        console.log(data)
    })
})

app.delete("/user/:id", function(req, res){
    const id = req.params.id;
    User.findByIdAndDelete(id, function(err, data){
        console.log(err)
        console.log(data)
    })
})


app.listen(4444, () => console.log("connected to 4444"));