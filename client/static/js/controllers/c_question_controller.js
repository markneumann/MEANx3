console.log('loading question_controller');
// // Now let's create a controller with some hardcoded data!
MEANModule.controller('QuestionController', function($scope, $location, QuestionFactory, PollFactory, UserFactory) {
    // This line goes at the top of the controller callback because the minute the controller gets called upon we want to create the $scope.questions array
    console.log('top of question controller');
    var new_q ={};
    $scope.user = UserFactory.getUser().name;
    console.log('$scope.user = ', $scope.user);

    $scope.addquestion = function() {
        //
        $scope.new_q.name = $scope.user;
        console.log('$scope.new_q =', $scope.new_q);
        console.log('loading question controller');
        QuestionFactory.create($scope.new_q, function(theOutput) {
            console.log("new q =", $scope.new_q);
            console.log('returned question', theOutput);
            // create poll record for dashboard
            new_poll ={
                name:  theOutput.name,
                q_id:  theOutput._id,
                question: theOutput.question
            };
            console.log('new_poll = ', new_poll);
            // note the use of callbacks here
            PollFactory.create(new_poll, function(theOutput) {
                console.log('returned poll', theOutput);
            });
             $location.url('/dashboard');
        });
    };


//
});
