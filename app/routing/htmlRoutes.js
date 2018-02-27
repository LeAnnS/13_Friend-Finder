// dependencies  include path package to get file path for html page
var path = require("path");

// Routing
module.exports = function (app) {

// html GET requests
// when we get this url - execute the function that sends the user the survey page
	app.get("/survey", function(req,res) {
		res.sendFile(path.join(__dirname + "/../public/survey.html"));
	});

// if using the app & they haven't already defined the url (such as survey), send them to the home page
	app.use( function(req,res) {
		res.sendFile(path.join(__dirname + "/../public/home.html"));
	});
}