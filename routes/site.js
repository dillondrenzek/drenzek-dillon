// Routes & Temporary Data
// version 2.2.3

var site = exports = module.exports;
var db = require('mongodb').MongoClient;



// The Work of
site.work = function(req, res) {
    res.render('the-work-of');
};



// GET '/author'
site.author = function(req, res) {
    res.render('author', {
        profile: "Dillon Drenzek"
    });
};

// GET '/author'
site.home = function(req, res) {
    res.render('homepage', {
        profile: "Dillon Drenzek"
    });
};

// GET '/test'
site.test = function(req, res) {
    res.render('test', {
    });
};

site.subtests = function(req, res) {
	res.render('test/'+req.params['subtest'], {
	});
};


// GET '/'
site.index = function(req, res, next) {
    res.render('index', {
    });
};