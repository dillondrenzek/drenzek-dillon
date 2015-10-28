// Server
// version 3.0.1

var exports = module.exports = {};

// Module Dependencies
var express = require('express')
  , routes = require('./routes')
  , path = require('path')
  , MongoClient = require('mongodb').MongoClient
  , MongoServer = require('mongodb').Server
  , assert = require('assert')
  , bodyParser = require('body-parser');

// Create and Configure App
var app = exports.app = express();

// mongodb://$OPENSHIFT_MONGODB_DB_HOST:$OPENSHIFT_MONGODB_DB_PORT/

app.set('db_host', process.env.OPENSHIFT_MONGODB_DB_HOST || "127.0.0.1");
app.set('db_port', process.env.OPENSHIFT_MONGODB_DB_PORT || 27017);

app.set('port', process.env.OPENSHIFT_NODEJS_PORT || process.env.PORT || 8080);
app.set('ip', process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1");
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'jade');
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/bower_components'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// var db = 

function errorHandler(err, req, res, next) {
	console.error(err.message);
	console.error(err.stack);
	res.status(500);
	res.render('error', {error: err});
}

app.use(errorHandler);


// Website Routes
var site = new express.Router();
site.get('/', routes.site.home);
site.get('/homepage', routes.site.home);
site.get('/the-work-of', routes.site.work);
site.get('/the-work-of/:page', routes.site.work);
site.get('/author', routes.site.author);
// site.get('/test/:subtest', routes.site.subtests);

// Admin Routes
var my = new express.Router();
my.get('/admin', routes.my.admin);
my.get('/login', routes.my.login);

// Api Routes
var api = new express.Router();
api.get('/projects', routes.api.projects.list);
api.get('/skills', routes.api.skills.list);
api.post('/skills/new', routes.api.skills.create);

var test = new express.Router();
test.get('/:subtest', routes.site.subtests);


app.use('/', site);
app.use('/my', my); 
app.use('/api', api);
app.use('/test', test);
app.use('/resume', express.static(__dirname + '/public/pdf/dillon-drenzek-resume.pdf'));

app.get('*', function(req, res, next){
	// next(Error('Page Not Found'));
	res.render('error');
});


// Create Server
function listen() {
	var server = app.listen(app.get('port'), app.get('ip'), function(){
	    var host = server.address().address;
	    var port = server.address().port;

	    console.log('Express server listening at http://%s:%s', host, port);
	});
}

var db = MongoClient.connect('mongodb://localhost:27017/drenzek-dillon', {native_parse:true}, function(err, db) {
	if (err) throw err;
	listen();
});
	// mongoclient.connect(function(err, mongoclient) {
	// 	if (err) throw err;
	// 	console.log("Connected correctly to database.");
	// 	
	// });
// } else {
// 	listen();
// }








// #!/bin/env node
// //  OpenShift sample Node application
// var express = require('express');
// var fs      = require('fs');


// /**
//  *  Define the sample application.
//  */
// var SampleApp = function() {

//     //  Scope.
//     var self = this;


//     /*  ================================================================  */
//     /*  Helper functions.                                                 */
//     /*  ================================================================  */

//     /**
//      *  Set up server IP address and port # using env variables/defaults.
//      */
//     self.setupVariables = function() {
//         //  Set the environment variables we need.
//         self.ipaddress = process.env.OPENSHIFT_NODEJS_IP;
//         self.port      = process.env.OPENSHIFT_NODEJS_PORT || 8080;

//         if (typeof self.ipaddress === "undefined") {
//             //  Log errors on OpenShift but continue w/ 127.0.0.1 - this
//             //  allows us to run/test the app locally.
//             console.warn('No OPENSHIFT_NODEJS_IP var, using 127.0.0.1');
//             self.ipaddress = "127.0.0.1";
//         };
//     };


//     /**
//      *  Populate the cache.
//      */
//     self.populateCache = function() {
//         if (typeof self.zcache === "undefined") {
//             self.zcache = { 'index.html': '' };
//         }

//         //  Local cache for static content.
//         self.zcache['index.html'] = fs.readFileSync('./index.html');
//     };


//     /**
//      *  Retrieve entry (content) from cache.
//      *  @param {string} key  Key identifying content to retrieve from cache.
//      */
//     self.cache_get = function(key) { return self.zcache[key]; };


//     /**
//      *  terminator === the termination handler
//      *  Terminate server on receipt of the specified signal.
//      *  @param {string} sig  Signal to terminate on.
//      */
//     self.terminator = function(sig){
//         if (typeof sig === "string") {
//            console.log('%s: Received %s - terminating sample app ...',
//                        Date(Date.now()), sig);
//            process.exit(1);
//         }
//         console.log('%s: Node server stopped.', Date(Date.now()) );
//     };


//     /**
//      *  Setup termination handlers (for exit and a list of signals).
//      */
//     self.setupTerminationHandlers = function(){
//         //  Process on exit and signals.
//         process.on('exit', function() { self.terminator(); });

//         // Removed 'SIGPIPE' from the list - bugz 852598.
//         ['SIGHUP', 'SIGINT', 'SIGQUIT', 'SIGILL', 'SIGTRAP', 'SIGABRT',
//          'SIGBUS', 'SIGFPE', 'SIGUSR1', 'SIGSEGV', 'SIGUSR2', 'SIGTERM'
//         ].forEach(function(element, index, array) {
//             process.on(element, function() { self.terminator(element); });
//         });
//     };


//     /*  ================================================================  */
//     /*  App server functions (main app logic here).                       */
//     /*  ================================================================  */

//     /**
//      *  Create the routing table entries + handlers for the application.
//      */
//     self.createRoutes = function() {
//         self.routes = { };

//         self.routes['/asciimo'] = function(req, res) {
//             var link = "http://i.imgur.com/kmbjB.png";
//             res.send("<html><body><img src='" + link + "'></body></html>");
//         };

//         self.routes['/'] = function(req, res) {
//             res.setHeader('Content-Type', 'text/html');
//             res.send(self.cache_get('index.html') );
//         };
//     };


//     /**
//      *  Initialize the server (express) and create the routes and register
//      *  the handlers.
//      */
//     self.initializeServer = function() {
//         self.createRoutes();
//         self.app = express.createServer();

//         //  Add handlers for the app (from the routes).
//         for (var r in self.routes) {
//             self.app.get(r, self.routes[r]);
//         }
//     };


//     /**
//      *  Initializes the sample application.
//      */
//     self.initialize = function() {
//         self.setupVariables();
//         self.populateCache();
//         self.setupTerminationHandlers();

//         // Create the express server and routes.
//         self.initializeServer();
//     };


//     /**
//      *  Start the server (starts up the sample application).
//      */
//     self.start = function() {
//         //  Start the app on the specific interface (and port).
//         self.app.listen(self.port, self.ipaddress, function() {
//             console.log('%s: Node server started on %s:%d ...',
//                         Date(Date.now() ), self.ipaddress, self.port);
//         });
//     };

// };   /*  Sample Application.  */



// /**
//  *  main():  Main code.
//  */
// var zapp = new SampleApp();
// zapp.initialize();
// zapp.start();

