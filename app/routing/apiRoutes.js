//Bring that sweet sweet friend data into this right hurr

const path = require('path');
const friendData = require("../data/friends");




module.exports = function(app){
    //get call to this route fo dat friend data
    app.get("/api/friends", function(req,res){
    res.json(friends);
    });

    app.post('/api/friends', function(req,res){
        friends.push(req.body);
        console.log("new friend:" + friends);
    })
}