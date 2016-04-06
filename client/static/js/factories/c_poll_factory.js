console.log('loading poll_factory');
// // create the PollFactory

MEANModule.factory('PollFactory', function($http) {

    var factory = {};
    var polls = [];
// return a list of all the polls
    factory.index = function(callback) {
        console.log("factory.index");
        // Where do we get access to $http?
        $http.get('/polls')
            .then(function(output) {
                polls = output.data;
                console.log("output =", output.data);
                callback(polls);
            })
            .catch(function(err) {
                console.log("err =", err);
            });
    };

    factory.show = function(data, callback) {
        console.log("factory.show poll = ", data);
         $http.get('/polls/show/'+data)
            .then(function(output) {
                polls = output.data;
                console.log("output =", polls);
                callback(polls);
            })
            .catch(function(err) {
                console.log("err =", err);
            });
    };

// create a new poll instance
    factory.create = function(data, callback) {
        console.log('the poll data', data);
        $http.post('/polls', data)
            .then(function(output) {
                //console.log("post /polls response: ", output.data);
                callback(output.data);
            })
            .catch(function(err) {
                console.log("err =", err);
            });
    };

    //called from poll controller to update the Likes count
   factory.update = function(data, callback) {
       //console.log("factory.update data:", data);
       $http.put('/poll/edit/', data)
       .then(function(output) {
           console.log("show response",output);
           callback(output.data);
       })
       .catch (function(err){
           console.log("err =", err );
       });
   };



//
    return factory;
});
