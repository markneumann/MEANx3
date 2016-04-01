// SERVER for API server
//standard express setup

var express=require('express');
var path = require('path');
var app = express();
//npm install body-parser --save
var bodyParser = require('body-parser');
//app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, './client')));
app.use(express.static(path.join(__dirname, './bower_components')));

//require mongoose config
require('./server/config/mongoose.js');
console.log("required mongoose");
// routes
var board_routes = require('./server/config/routes.js')(app);

console.log("loaded routes");

app.listen(8001, function() {
    console.log("listening on port 8001 - Polls", Date());
});
