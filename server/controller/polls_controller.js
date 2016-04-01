console.log("loading poll_controller");
var mongoose = require('mongoose');
var Poll = mongoose.model('polls');
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
                res.status(200); // send back http 200 status if successful
                res.json(newPoll);
                // res.json({success: true});
            })
            .catch (function(err){
                console.log(err);
                res.status(500); // send back http 200 status if successful
                res.json({error: err});
            });
        },


        // show_name:  function(req, res){
        //     console.log("--> show path");
        //     console.log(req.params);
        //     Name.find({_id: req.params.id}, function(err, polls) {
        //         if(err) {
        //             console.log(err);
        //             res.render('errors', {title: 'you have errors!', errors: name.errors});
        //         } else {
        //             res.json({names: names}); //<-- think we change this
        //         }
        //     });
        // },
    };
})(); //returns object
