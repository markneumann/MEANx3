console.log('loading dashboard_controller');
// Now let's create a controller with some hardcoded data!
MEANModule.controller('DashboardController', function($scope, $location, PollFactory, UserFactory) {
    // This line goes at the top of the controller callback because the minute the controller gets called upon we want to create the $scope.polls array
    $scope.loggedIn = UserFactory.getUser().name;
    console.log('top of dashboard controller for user ', $scope.loggedIn);
    // Show current polls
    PollFactory.index(function(data) {
        console.log("PollFactory.index");
        $scope.polls = data;
        console.log("$scope.polls =", $scope.polls);
    });
    //console.log('return from PollFactory');

    $scope.addpoll = function(q_id,q) {
        currentU = UserFactory.getUser().name;
        console.log('currentU=', currentU);
        new_poll ={
            name:  currentU,
            q_id:  q_id,
            question: q
        };
        console.log('new_poll = ', new_poll);
        // note the use of callbacks here
        PollFactory.create(new_poll, function(theOutput) {
            //console.log('returned poll', theOutput);
            $scope.polls.push(theOutput);
            console.log('scope =', theOutput.q_id);
            $location.url('/poll/'+theOutput.q_id);
        });
    };
//
//     $scope.removepoll = function(poll) {
//         var removeThisPoll =$scope.polls.indexOf(poll);
//         console.log('removepoll: ', removeThisPoll);
//         console.log('$scope.polls = ', $scope.polls);
//         console.log('remove_id: ', $scope.polls[removeThisPoll]._id);
//         if(~removeThisPoll){
//             var remove_id = $scope.polls[removeThisPoll]._id;
//             // note the use of callbacks here
//             PollFactory.remove(remove_id, function() {
//                 console.log("remove poll =", removeThisPoll);
//                 $scope.polls.splice(removeThisPoll,1);
//             });
//         }
//     };
//
});
