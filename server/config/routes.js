console.log("loading routes");
//********** RESTful routes ********
var mongoose = require('mongoose');
var Questions = require('../controller/questions_controller.js');   /////////////
var Polls = require('../controller/polls_controller.js');           /////////////
var Users = require('../controller/users_controller.js');           /////////////

module.exports = function(app){                                    /////////////
    app.get('/polls', Polls.index);  //Return the list of completed polls for the dashboard
    app.post('/polls', Polls.new_poll); //Save test results from one test from the test partial
    app.get('/polls/edit/:id', Polls.edit_poll);
    // // // app.get('/polls/remove/:id', Test.remove_test);
    app.get('/polls/show/:id', Polls.show_poll);
    app.get('/questions', Questions.index); // Return a question (random), with answers, etc.. for test partial
    app.post('/questions', Questions.new_question);  // Create a new question submitted fro question partial
    app.get('/questions/show/:id', Questions.show_question);
    app.post('/users', Users.login);  // Login the user, creating a new one if needed
    app.get("*", route404);
};
//********** End routes **************

function route404(req, res) {
    console.log("404 error for " + req.url);
}
