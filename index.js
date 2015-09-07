// app.js
// version 2.0.0

var exports = module.exports = {};

// Module Dependencies
var express = require('express')
  , routes = require('./routes')
  , path = require('path');

// Create and Configure App
var app = exports.app = express();
app.set('port', process.env.PORT || 4567);
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'jade');
app.use(express.static(__dirname + '/public'));



// App Routes
app.get('/', routes.index);



// Create Server
var server = app.listen(app.get('port'), function(){
	var host = server.address().address;
	var port = server.address().port;

	console.log('Express server listening at http://%s:%s', host, port);
});