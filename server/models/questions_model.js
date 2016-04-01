//basic model
console.log("loading questions_model");
var mongoose = require('mongoose');
//

var QuestionSchema = new mongoose.Schema({
    //define schema here
    // could add a submitted by if there is time
    //name: String,
    theQuestion: { type: String,
                    required: true,
                    minlength: 10},
    description: String,
}, { timestamps: {createdAt: 'created_at'}
});

// could add validations to require some text if there is time
//mongoose.model('options', OptionSchema);  Do I need this?
mongoose.model('questions', QuestionSchema);

console.log("exit question_model");
