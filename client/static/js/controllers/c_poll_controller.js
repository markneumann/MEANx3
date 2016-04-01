console.log('loading poll_controller');
// //
MEANModule.controller('PollController', function($scope, $routeParams, $location, QuestionFactory, PollFactory, UserFactory) {
    // This line goes at the top of the controller callback because the minute the controller gets called upon we want to create the $scope.friends array
    $scope.errorArea = {};

    console.log('top of PollController');
    // Create a poll
    console.log('route params', $routeParams);
    var id = $routeParams.id;
    QuestionFactory.show(id, function(data) {
        console.log('returning question from factory');
        $scope.question = data;
    });

    // Accept a vote and update the question record for that option1
    $scope.submit_poll = function(q_id, opt_num) {
        inc_opt_count = {
            q_id: q_id,
            opt_num: opt_num
        };
        console.log('submit_poll event ', inc_opt_count);
        //var new_count += $scope.optionNumber;
        QuestionFactory.update(inc_opt_count, function(theOutput) {
            console.log("new poll =", $scope.new_poll);
            console.log('returned poll', theOutput);

            $location.url('/dashboard');
        });
    };

    // // Create the new poll record
    // $scope.submit_poll = function(optionNumber) {
    //     console.log('submit_poll event');
    //     //var new_count += $scope.optionNumber;
    //     PollFactory.create($scope.new_poll, function(theOutput) {
    //         console.log("new poll =", $scope.new_poll);
    //         console.log('returned poll', theOutput);
    //     });
    // };

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
