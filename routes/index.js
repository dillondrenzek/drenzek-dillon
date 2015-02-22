var routes = exports = module.exports;
exports.skills = require('./skills');


// GET '/'

routes.index = function(req, res) {
	res.render('index');
};