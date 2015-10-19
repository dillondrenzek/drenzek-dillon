// Routes & Temporary Data
// version 2.2.3

var site = exports = module.exports;
var seedData = require('../db');

// GET '/the-work-of'
site.work = function(req, res) {
	// res.render('the-work-of', {
	// 	projects: seedData.projects.v2
	// });
    res.render('the-work-of', {
        data: seedData.theWorkOf
    });
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
    	projects: seedData.projects,
    	skills: seedData.skills
    });
};

site.subtests = function(req, res) {
	res.render('test/'+req.params['subtest'], {
		projects: seedData.projects.v2
	});
};


// GET '/'
site.index = function(req, res, next) {
    res.render('index', {
    	projects: seedData.projects.old,
    	skills: seedData.skills
    });
};