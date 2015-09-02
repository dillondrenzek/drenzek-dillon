var times = exports = module.exports;
var Time = require('../models/time');

// GET '/times'
times.list = function(req, res, next) {
    Time.getAll(function (err, times) {
        if (err) return next(err);
        res.render('times/list', {
            times: times
        });
    });
};

// GET '/times/new'
times.new = function(req, res, next) {
    res.render('times/new');
};

// GET '/times/:id'
times.show = function(req, res, next) {
    Time.get(req.params.id, function (err, time) {
        if (err) return next(err);

        res.render('times/show', {
            time: time
        });
    });
};



// GET '/times/edit/:id'
times.edit = function(req, res, next) {
    Time.get(req.params.id, function (err, time) {
        if (err) return next(err);

        res.render('times/edit', {
            time: time
        });
    });
};

// POST '/times/new'
times.create = function(req, res, next) {
    delete req.body['__proto__'];

    Time.create(req.body, function (err, time) {
            if (err) return next(err);
            res.redirect('/times/edit');
    });
};

// GET '/times/edit'
times.list_edit = function(req, res, next) {
    Time.getAll(function (err, times) {
        if (err) return next(err);

        res.render('times/list_edit', {
            times: times
        });
    });
};

// POST '/times/edit/:id'
times.update = function(req, res, next) {
    delete req.body['__proto__'];

    Time.get( req.params.id, function (err, time) {
        time.update(req.body, function (err, result) {
            if (err) return next(err);

            res.redirect('/times/edit');
        });
    });
};

// POST '/times/destroy/:id'
times.destroy = function(req, res, next) {
    Time.get(req.params.id, function (err, time) {
        if (err) return next(err);
        time.del(function (err) {
            if (err) return next(err);
            res.redirect('/times/edit');
        });
    });
};