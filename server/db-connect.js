var mongoose = require("mongoose");
var dbURI = "mongodb://localhost:27017/shop";

mongoose.connect(dbURI, function(error, db) {
  var models = require("./models");
  models.init(db);
});

// CONNECTION EVENTS
mongoose.connection.on("connected", function() {
  console.log("Mongoose connected to " + dbURI);
});
mongoose.connection.on("error", function(err) {
  console.log("Mongoose connection error: " + err);
});
mongoose.connection.on("disconnected", function() {
  console.log("Mongoose disconnected");
});
