console.log('loading question_factory');
// // create the QuestionsFactory
// console.log('MEANModule',MEANModule);
MEANModule.factory('QuestionFactory', function($http) {
    //console.log('top of QuestionFactory');
    //not used
    var factory = {};
    var questions = [];

    factory.index = function(callback) {
        console.log("questions factory.index");
        // Where do we get access to $http?
        $http.get('/questions')
        .then(function(output) {
            questions = output.data;
            console.log("output =", output.data);
            callback(questions);
        })
        .catch (function(err) {
            console.log("err =", err );
            callback(err);
        });
    };
//  called from Questions Controller to create a new question
    factory.create = function(data, callback) {
        console.log("factory.new data:", data);
        $http.post('/questions',data)
        .then(function(output) {
            console.log("get /new q response: ", output.data);
            callback(output.data);
        })
        .catch (function(err) {
            console.log("err =", err );
            callback(err);
        });
    };

     //called from poll controller to show the question and data
    factory.show = function(data, callback) {
        console.log("factory.show question data:", data);
        $http.get('/questions/show/' + data)
        .then(function(output) {
            console.log("show response",output);
            callback(output.data);
        })
        .catch (function(err){
            console.log("err =", err );
        });
    };

    //called from poll controller to update the Answers count
   factory.update = function(data, callback) {
       //console.log("factory.update data:", data);
       $http.put('/questions/edit/', data)
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
