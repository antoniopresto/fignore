"use strict";

var https = require("https");
var path = require("path");
var gitgnoreFilePath = path.resolve(__dirname, "..", ".gitignore");
var fs = require("fs");

var GitIgnore = {};

GitIgnore.writeFile = function(dest, callback) {
  try {
    var stream = fs.readFileSync(gitgnoreFilePath);
    fs.writeFileSync(dest, stream);
    callback();
  } catch (err) {
    callback(err);
  }
};

module.exports = GitIgnore;
