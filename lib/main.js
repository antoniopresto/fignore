"use strict";

var GitIgnore = require("./library");
var fs = require("fs");

(function() {
  var dest = process.cwd() + "/.gitignore";

  GitIgnore.writeFile(dest, function(err) {
    if (err) {
      if (err.statusCode) {
        console.error("Recieved status code " + err.statusCode);
      } else {
        console.error("An unexpected error occurred.");
        console.error(err);
      }
      return;
    }
    console.log("Created .gitignore file for node project");
  });
}.call(this));
