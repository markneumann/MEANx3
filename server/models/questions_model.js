//basic model
console.log("loading questions_model");
var mongoose = require('mongoose');
//

var QuestionSchema = new mongoose.Schema({
    //define schema here
    // could add a submitted by if there is time
    name: String,
    question: String,
    option1: String,
    option1count: { type: Number, default: 0 },
    option2: String,
    option2count: { type: Number, default: 0 },
    option3: String,
    option3count: { type: Number, default: 0 },
    option4: String,
    option4count: { type: Number, default: 0 }
});

// could add validations to require some text if there is time
//mongoose.model('options', OptionSchema);  Do I need this?
mongoose.model('questions', QuestionSchema);

console.log("exit question_model");
