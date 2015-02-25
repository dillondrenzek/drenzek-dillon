var site = exports = module.exports;


// GET '/'
site.index = function(req, res, next) {
	res.render('index');
};