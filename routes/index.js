// Routes
// version 2.0.0
var routes = exports = module.exports;


// GET '/'
routes.index = function(req, res, next) {
    res.render('index', {});
};