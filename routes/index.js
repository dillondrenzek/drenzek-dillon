// Routes & Temporary Data
// version 2.2.3

var routes = exports = module.exports;
var seedData = require('../db');

// GET '/the-work-of'
routes.work = function(req, res) {
	res.render('the-work-of.jade', {
		projects: seedData.projects.v2
	})
};


// GET '/test'
routes.test = function(req, res) {
    res.render('test', {
    	projects: seedData.projects,
    	skills: seedData.skills
    });
};

// GET '/'
routes.index = function(req, res, next) {

    res.render('index', {
    	projects: seedData.projects.old,
    	skills: seedData.skills
    });
};



