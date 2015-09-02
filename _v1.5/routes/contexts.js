var contexts = exports = module.exports;
var Context = require('../models/context');

// GET '/contexts'
contexts.list = function(req, res, next) {
    Context.getAll(function (err, contexts) {
        if (err) return next(err);
        res.render('contexts/list', {
            contexts: contexts
        });
    });
};

// GET '/contexts/new'
contexts.new = function(req, res, next) {
    res.render('contexts/new');
};

// GET '/contexts/:id'
contexts.show = function(req, res, next) {
    Context.get(req.params.id, function (err, context) {
        if (err) return next(err);

        res.render('contexts/show', {
            context: context
        });
    });
};



// GET '/contexts/edit/:id'
contexts.edit = function(req, res, next) {
    Context.get(req.params.id, function (err, context) {
        if (err) return next(err);

        res.render('contexts/edit', {
            context: context
        });
    });
};

// POST '/contexts/new'
contexts.create = function(req, res, next) {
    delete req.body['__proto__'];

    Context.create(req.body, function (err, context) {
            if (err) return next(err);
            res.redirect('/contexts/edit');
    });
};

// GET '/contexts/edit'
contexts.list_edit = function(req, res, next) {
    Context.getAll(function (err, contexts) {
        if (err) return next(err);

        res.render('contexts/list_edit', {
            contexts: contexts
        });
    });
};

// POST '/contexts/edit/:id'
contexts.update = function(req, res, next) {
    delete req.body['__proto__'];

    Context.get( req.params.id, function (err, context) {
        context.update(req.body, function (err, result) {
            if (err) return next(err);

            res.redirect('/contexts/edit');
        });
    });
};

// POST '/contexts/destroy/:id'
contexts.destroy = function(req, res, next) {
    Context.get(req.params.id, function (err, context) {
        if (err) return next(err);
        context.del(function (err) {
            if (err) return next(err);
            res.redirect('/contexts/edit');
        });
    });
};