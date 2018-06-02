//Bring that sweet sweet friend data into this right hurr

const path = require('path');
const friends = require("../data/friends.js");




module.exports = function(app){
    //get call to this route fo dat friend data
    app.get("/api/friends", function(req,res){
    res.json(friends);
    });

    app.post("/api/friends", function(req, res) {

        const newFriend = {
            name: "",
            photo: "",
            score: 100
        };
        const newFriend = req.body;
        const newFriendScores = newFriend.score;
        const diff = 0;

        for (let i = 0; i < friends.length; i++) {

            diff = 0;

            for (let j = 0; j < friends[i].scores[j]; j++) {
              
                diff += Math.abs(parseInt(newFriendScores[j]) - parseInt(friends[i].scores[j]));

                if (diff <= bestFriend.friendDiff) {

                    bestFriend.name = friends[i].name;
                    bestFriend.photo = friends[i].photo;
                    bestFriend.friendDiff = diff;

                }
            }
        }
        friends.push(friendData);

        res.json(newFriend);
    });
}