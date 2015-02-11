
// Module Dependencies

var express = require('express')
  , routes = require('./routes')
  , http = require('http')
  , path = require('path');

var app = express();

app.get('/', function() {
	console.log("Index, hello world!");
});