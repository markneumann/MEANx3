console.log('loading user_factory');
// // create the UserFactory

MEANModule.factory('UserFactory', function($http) {             /////////////

    var factory = {};
    var tests = [];
    var currentUser = {};
    //var lastScore = -1;

//
    factory.login = function(data, callback) {                  /////////////
        console.log('the login name', data.name);
        // data.name = data.name;
        //console.log('revised data = ', data);
        $http.post('/users', data)
            .then(function(output) {
                currentUser = output.data;
                console.log("post /users response: ", currentUser);
                callback(currentUser);
            })
            .catch(function(err) {
                console.log("err =", err);
            });
    };

    factory.getUser = function() {                              /////////////
        return currentUser;
    };

    factory.logout = function(data, callback) {
        console.log("factory.logout", data);
        currentUser = {};
        callback(currentUser);
    };


    return factory;
});
