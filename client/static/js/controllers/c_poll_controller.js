console.log('loading poll_controller');
// //
MEANModule.controller('PollController', function($scope, $routeParams, $location, QuestionFactory, PollFactory, UserFactory) {
    // This line goes at the top of the controller callback because the minute the controller gets called upon we want to create the $scope.friends array
    $scope.errorArea = {};

    console.log('top of PollController');
    // show the polls
    console.log('route params', $routeParams);
    var id = $routeParams.id;
    QuestionFactory.show(id, function(data){
        console.log('returning question from factory');
        $scope.question = data;
    });
    PollFactory.show(id, function(data) {
        console.log('returning poll from factory');
        $scope.polls = data;
    });

    // Accept a vote and update the question record for that option1
    $scope.submit_like= function(p_id) {
        console.log('submit_like event ', p_id);
        PollFactory.update(p_id, function(theOutput) {
            console.log('returned like', theOutput);
            $scope.poll.like++;
        });
    };

    // New poll record
    $scope.new_poll = function(q_id) {
        console.log('q_id =', q_id);
        console.log('new_poll event', $scope.new_p);
        var new_poll = {
            q_id: q_id,
            comment: $scope.new_p.comment,
            details: $scope.new_p.details
        };
        console.log('new_poll = ', new_poll);
        //simply pass in the entire object
        PollFactory.create(new_poll, function(theOutput) {
            console.log('returned poll', theOutput);
        });
        // $location.url('/dashboard');
    };

    // New poll record
    $scope.show_poll = function(q_id) {
        console.log('q_id =', $scope.question.q_id);
        console.log('new_poll event', $scope.new_p);
        //simply pass in the entire object
        PollFactory.create($scope.new_p, function(theOutput) {
            console.log('returned poll', theOutput);
        });
        // $location.url('/dashboard');
    };


//
    // function forErrors(output) {
    //     console.log('catch --->', output);
    //     if(output.data.error){  //handle other errors
    //         //console.log('error = ', output.data.error);
    //         console.log('error errmsg = ', output.data.error.errmsg);
    //         $scope.errorArea.errmsg = output.data.error.errmsg;
    //     }
    //     if(output.data.errmsg){   //handle not unique
    //         console.log('errmsg = ', output.data.errmsg);
    //         $scope.errorArea.errmsg = output.data.error;
    //
    //     }
    // }
//
});
