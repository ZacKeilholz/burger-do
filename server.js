//NPM Library Instantiazation
var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");

//Library SETUP
var PORT = process.env.PORT || 8080;


var app = express();

//Serve Static Content from "public" directory
app.use(express.static("public"));

//Json Parser
//==================================================

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

//Handlebars Setup
//==================================================

app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

//CONTROLLER ROUTE
//==================================================
var routes = require("./controllers/burgers_controllers");

app.use(routes);

//SERVER START
//==================================================

app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});








