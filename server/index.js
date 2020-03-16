var http = require("http");
var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");

require("./db-connect");

var routesApi = require("./routes");

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/api", routesApi);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(__dirname + "/dist"));

  app.get("/*", function(req, res) {
    res.sendFile(path.join(__dirname + "/dist/index.html"));
  });
}

var port = 3000;
app.set("port", port);

var server = http.createServer(app);

server.listen(port);
server.on("error", onError);
server.on("listening", onListening);

function onError(error) {
  throw error;
}

function onListening() {
  console.log("Listening");
}
