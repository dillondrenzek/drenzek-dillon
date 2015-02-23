var routes = exports = module.exports;
exports.skills = require('./skills');
exports.projects = require('./projects');


// GET '/'

routes.index = function(req, res) {
	res.render('index');
};