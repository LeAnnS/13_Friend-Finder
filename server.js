// Dependencies - npm packages needed
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Set up express configuration
// Tell the node tht we are creating an express server
var app = express();

// set the port
var PORT = process.env.PORT || 8080;

// set Express app to handle data parsing
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// // Routers - point server to route files.  /routes give server a map of how to respond when users visit or request data from URLs.
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);


// start server w/Listener
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});