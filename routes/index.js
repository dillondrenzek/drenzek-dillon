// Routes & Temporary Data
// version 2.2.3

var routes = exports = module.exports;
var seedData = require('../db');

// GET '/test'
routes.test = function(req, res) {
    res.render('test');
};

// GET '/'
routes.index = function(req, res, next) {

    res.render('index', {
    	projects: seedData.projects,
    	skills: seedData.skills
    });
};



