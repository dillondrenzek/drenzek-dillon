var routes = exports = module.exports;
exports.skills = require('./skills');
exports.projects = require('./projects');
exports.times = require('./times');
exports.contexts = require('./contexts');


// GET '/'

routes.index = function(req, res) {
	res.render('index');
};