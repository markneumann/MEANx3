console.log('loading app.js');
// Let's create our angular module
var MEANModule = angular.module('MEAN_app', ['ngRoute']);

// the .controller() method adds a controller to the module
MEANModule.config(function($routeProvider){
    $routeProvider
    .when('/', {
        templateUrl: '/partials/login.html'
    })
    .when('/dashboard', {
        templateUrl: '/partials/dashboard.html'
    })
    .when('/poll/:id', {
        templateUrl: '/partials/poll.html'
    })
    .when('/question', {
        templateUrl: '/partials/question.html'
    })
    .otherwise({
        redirectTo: '/'
    });
});
