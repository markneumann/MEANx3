console.log('loading user_controller');
// // Now let's create a controller with some hardcoded data!
MEANModule.controller('UserController', function($scope, $location, UserFactory) {
    // This line goes at the top of the controller callback because the minute the controller gets called upon we want to create the $scope.questions array
    console.log('top of user controller');
    $scope.loggedIn = false;

    $scope.login = function() {
        // note the use of callbacks here
        UserFactory.login($scope.user, function(theOutput) {
            console.log("user", $scope.user);
            console.log('returned user', theOutput.name);
            //console.log($scope);
            $scope.loggedIn = true;
            $location.url('/dashboard');

        });
    };

    $scope.logout = function() {
        // note the use of callbacks here
        UserFactory.logout($scope.user, function(theOutput) {
            console.log("logout user", $scope.user);
            console.log('returned user', theOutput.name);
            //console.log($scope);
            $scope.loggedIn = false;
            $location.url('/');

        });
    };

});
