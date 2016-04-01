//basic model
console.log("loading user_model");
var mongoose = require('mongoose');
//
var UserSchema = new mongoose.Schema({
    //define schema here
    name: { type: String, required: true, unique: true},
    }, { timestamps: {
        createdAt: 'created_at'
            }
        }
);

//NameSchema.path('name').required(true, 'Name cannot be blank');

mongoose.model('users', UserSchema);

console.log("exit user_models");
