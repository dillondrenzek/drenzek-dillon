var my = exports = module.exports;
var seedData = require('../db');



// GET '/my/login'
my.login = function(req, res) {
	res.render('admin/login', {
		projects: seedData.projects.v2
	});
};

// GET '/my/admin'
my.admin = function(req, res) {
	res.render('admin/admin', {

	});
};