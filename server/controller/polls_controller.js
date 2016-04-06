console.log("loading poll_controller");
var mongoose = require('mongoose');
var Poll = mongoose.model('polls');
var Question = mongoose.model('questions');  //so a new poll can update questions counter
var catch_errors = function(err){
    res.json({error:err});
};
module.exports = (function() {
    return {
        index:  function(req, res){
            console.log("--> polls index path");
            Poll.find()
            .then(function(results){
                // console.log('results=',results);
                res.json(results);
            })
            .catch (function(err){
                console.log(err);
                res.status(500); // send back http 200 status if successful
                res.json({error: err});
            });
        },

        new_poll: function(req, res) {
            console.log("--> new poll - body =", req.body);
            var newPoll = new Poll({
                name: req.body.name,
                q_id: req.body.q_id,
                comment: req.body.comment,
                details: req.body.details
            });
            newPoll.save()
            .then(function() {
                console.log("return 200", newPoll);
                Question.findByIdAndUpdate(newPoll.q_id,{$inc: {"answers": 1}})
                .then(function() {
                    console.log("incremented question poll counter");
                })
                .catch (function(err){
                    console.log("error incrementing question poll counter",err);
                });
                res.status(200); // send back http 200 status if successful
                res.json(newPoll);
            })
            .catch (function(err){
                console.log(err);
                res.status(500); // send back http 200 status if successful
                res.json({error: err});
            });
        },


        show_poll:  function(req, res){
            console.log("--> show path");
            console.log(req.params.id);
            Poll.find({"q_id": req.params.id}).sort({created_at:'desc'}).exec(function(err, polls) {
                if(err) {
                    console.log(err);
                    res.render('errors', {title: 'you have errors!', errors: name.errors});
                } else {
                    res.json(polls); //<-- think we change this
                    console.log('polls =', polls);
                }
            });
        },

        edit_poll: function(req, res) {
            console.log("--> edit_poll - req.params =", req.params);
            Poll.findByIdAndUpdate({"_id": req.params.id},{$inc: {"like_count": 1}})
            .then(function() {
                console.log("incremented poll like counter");
                res.status(200); // send back http 200 status if successful
                res.json({success: 'true'});
            })
            .catch (function(err){
                console.log("error incrementing poll like counter",err);
                res.status(500); // send back http 200 status if successful
                res.json({error: err});
            });

        },

    };
})(); //returns object
