console.log('loading poll_controller');
// //
MEANModule.controller('PollController', function($scope, $routeParams, $location, QuestionFactory, PollFactory, UserFactory) {
    // When called from pollresults, show the question and all the answers.
    $scope.errorArea = {};

    $scope.loggedIn = UserFactory.getUser().name;
    console.log('$scope.loggedIn = ', $scope.loggedIn);

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


    // Accept a vote and update the answer like count
    // called from the pollresuls
    $scope.submit_like= function(p_id, idx) {
        console.log('submit_like event ', p_id);
        console.log('$scope.polls[idx] =', $scope.polls[idx] );
        PollFactory.update(p_id, function(theOutput) {
            console.log('returned like', theOutput);
            $scope.polls[idx].like_count++;
        });
    };

    // New poll record, called from the DashboardController
    $scope.new_poll = function(q_id) {
        var currentUser = UserFactory.getUser().name;
        console.log('user = ', currentUser);
        console.log('q_id =', q_id);
        console.log('new_poll event', $scope.new_p);
        var new_poll = {
            name : currentUser,
            q_id: q_id,
            comment: $scope.new_p.comment,
            details: $scope.new_p.details
        };
        console.log('new_poll = ', new_poll);
        //simply pass in the entire object
        PollFactory.create(new_poll, function(theOutput) {
            console.log('returned poll', theOutput);
        });
        console.log('AFTER poll answer create, the q_id is ', q_id);
        $location.path('/poll/show/' + q_id);
    };

    // show poll record never used, instead the "index" view above is ues
    // $scope.show_poll = function(q_id) {
    //     console.log('q_id =', $scope.question.q_id);
    //     console.log('new_poll event', $scope.new_p);
    //     //simply pass in the entire object
    //     PollFactory.show($scope.new_p, function(theOutput) {
    //         console.log('returned poll', theOutput);
    //     });
    //     // $location.url('/dashboard');
    // };


//
    function forErrors(output) {
        console.log('catch --->', output);
        if(output.data.error){  //handle other errors
            //console.log('error = ', output.data.error);
            console.log('error errmsg = ', output.data.error.errmsg);
            $scope.errorArea.errmsg = output.data.error.errmsg;
        }
        if(output.data.errmsg){   //handle not unique
            console.log('errmsg = ', output.data.errmsg);
            $scope.errorArea.errmsg = output.data.error;

        }
    }
//
});
