var my = exports = module.exports;



// GET '/my/login'
my.login = function(req, res) {
	res.render('admin/login', {
	});
};

// GET '/my/admin'
my.admin = function(req, res) {
	res.render('admin/admin', {
	});
};