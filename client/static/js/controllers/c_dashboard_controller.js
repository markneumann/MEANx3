console.log('loading dashboard_controller');
// Now let's create a controller with some hardcoded data!
MEANModule.controller('DashboardController', function($scope, $location, QuestionFactory, UserFactory) {
    // This line goes at the top of the controller callback because the minute the controller gets called upon we want to create the $scope.polls array
    $scope.loggedIn = UserFactory.getUser().name;
    console.log('top of dashboard controller for user ', $scope.loggedIn);
    // Show current Questions
    QuestionFactory.index(function(data) {
        console.log("QuestionFactory.index");
        $scope.questions = data;
        console.log("$scope.questions =", $scope.questions);
    });

//
});
