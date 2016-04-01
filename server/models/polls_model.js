//basic model
console.log("loading polls_model");
var mongoose = require('mongoose');
//
var PollSchema = new mongoose.Schema({
    //define schema here
    name: String,
    q_id: String,
    comment: { type: String,
               required: true,
               minlength: 5},
    details: String,
    like_count: Number,
}, { timestamps: {createdAt: 'created_at'}
});

//NameSchema.path('name').required(true, 'Name cannot be blank');

mongoose.model('polls', PollSchema);

console.log("exit test_models");
