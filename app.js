// app.js
// version 2.0.0

// Module Dependencies

var express = require('express')
  , routes = require('./routes')
  , http = require('http')
  , path = require('path')
  , bodyParser = require('body-parser')
  , methodOverride = require('method-override');
  // , storm = require('./storm-feature');
  // , methodOverride = require('method-override');

var app = express();

app.set('port', process.env.PORT || 4444);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(bodyParser());
app.use(methodOverride());
app.use(express.static(path.join(__dirname, 'public')));



// APP ROUTES

// app.use('/storm', storm.app);

app.get('/', routes.index);

app.use(function(err, res, req, next){
	console.log(err);
	res.sendStatus(404)
	// res.render('error');
});


// http.createServer(app).listen(app.get('port'), function(){
//   console.log('Express server listening at: http://localhost:%d/', app.get('port'));
// });

var server = app.listen(app.get('port'), function(){
	var host = server.address().address;
	var port = server.address().port;

	console.log('Express server listening at http://%s:%s', host, port);
});