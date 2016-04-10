console.log('loading app.js');
// Let's create our angular module
var MEANModule = angular.module('MEAN_app', ['ngRoute']);       /////////////

// the .controller() method adds a controller to the module
MEANModule.config(function($routeProvider){                     /////////////
    $routeProvider
    .when('/', {
        templateUrl: '/partials/login.html'
    })
    .when('/dashboard', {                           // show the questions
        templateUrl: '/partials/dashboard.html'
    })
    .when('/poll/new/:id', {                        // new answer form
        templateUrl: '/partials/poll.html'
    })
    .when('/poll/show/:id', {                       // show the results for q_id
        templateUrl: '/partials/pollresults.html'
    })
    .when('/question', {                           // new question form
        templateUrl: '/partials/question.html'
    })
    .otherwise({
        redirectTo: '/'
    });
});
