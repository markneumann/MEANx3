console.log("loading questions_controller");
var mongoose = require('mongoose');
var Question = mongoose.model('questions');
var catch_errors = function(err){
    res.json({error:err});
};
module.exports = (function() {
    return {
        index:  function(req, res){
            console.log("--> questions index path");
            Question.find().sort({created_at:'desc'})
            .then(function(results){
                    res.json(results);
            })
            .catch (function(err){
                console.log(err);
                res.status(500); // send back http 200 status if successful
                res.json({error: err});
            });
        },

        new_question: function(req, res) {
            console.log("--> new question path");
            console.log("req.body =", req.body);
            var newQuestion = new Question({
                //name:     req.body.name,
                theQuestion: req.body.question,
                description:  req.body.description
            });
            newQuestion.save()
            .then(function() {
                console.log("return 200");
                res.status(200); // send back http 200 status if successful
                res.json(newQuestion);
            })
            .catch (function(err){
                console.log(err);
                res.status(500); // send back http 200 status if successful
                res.json({error: err});
            });
        },

        show_question:  function(req, res){
            console.log("--> show path");
            //console.log(req.params);
            the_id = {_id: req.params.id };
            console.log('the_id =', the_id);
            Question.findOne(the_id, function(err, question) {
                if(err) {
                    console.log(err);
                    //res.render('errors', {title: 'you have errors!', errors: question.err});
                } else {
                    res.json(question); //<-- think we change this
                }
            });
        },
//         //

//

    };
})(); //returns object
