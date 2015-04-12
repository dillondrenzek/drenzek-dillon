var site = exports = module.exports;

var Project = require('../models/project'),
	Skill = require('../models/skill');


// GET '/'
site.index = function(req, res, next) {
    res.render('index', {});
};

// features
site.ios = function(req, res, next) {
    res.render('ios', {});
};

site.web = function(req, res, next) {
	res.render('web', {});
}

site.art = function(req, res, next) {
	res.render('art', {});
}

// overviews
site.skills = function(req, res, next) {
	res.render('skills', {});
}

site.projects = function(req, res, next) {
	res.render('projects', {});
}

site.resume = function(req, res, next) {
    res.render('resume', { });
};