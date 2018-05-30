//Bring that sweet sweet friend data into this right hurr
const friendData = require("../data/friends");




module.exports = function(app){
    //get call to this route fo dat friend data
    app.get("/api/friends", function(req,res){
    res.json(friendData);
    })

    app.post('/api/friends', function(req,res){
        var freshFriend = req.body;
    })
}