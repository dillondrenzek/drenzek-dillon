// context.js

var neo4j = require('neo4j');

var db = new neo4j.GraphDatabase(
	process.env['NEO4J_URL'] ||
	process.env['GRAPHENEDB_URL'] ||
	'http://localhost:7474'
);

var Context = module.exports = function Context(_node) {
	this._node = _node;
};


// public instance properties
Object.defineProperty(Skill.prototype, 'id', {
    get: function () { return this._node.id; }
});

Object.defineProperty(Skill.prototype, 'title', {
    get: function () {
        return this._node.data['title'];
    },
    set: function (title) {
        this._node.data['title'] = title;
    }
	});

// public instance methods
Context.prototype.save = function (callback) {
    this._node.save(function (err) {
        callback(err);
    });
};

Context.prototype.del = function (callback) {
    var query = [
        'MATCH (context:Context)',
        'WHERE ID(context) = {contextId}',
        'DELETE context'
    ].join('\n');

    var params = {
        contextId: this.id
    };

    db.query(query, params, function (err) {
        callback(err);
    });
};

Context.prototype.update = function (data, callback) {

    var query = [
        'MATCH (context: Context)',
        'WHERE ID(context) = {id}',
        'SET context = {map}',
        'RETURN context'
    ].join('\n');

    var params = {
        id: this.id,
        map: data
    }

    db.query(query, params, function (err, result) {
        if (err) return callback(err);
        callback(null, new Context(result['context']));
    });
}

// static methods:

Context.get = function (id, callback) {
    db.getNodeById(id, function (err, node) {
        if (err) return callback(err);
        callback(null, new Context(node));
    });
};

Context.getAll = function (callback) {
    var query = [
        'MATCH (context:Context)',
        'RETURN context',
    ].join('\n');

    db.query(query, null, function (err, results) {
        if (err) return callback(err);
        var contexts = results.map(function (result) {
            return new Context(result['context']);
        });
        callback(null, contexts);
    });
};


// creates the context and persists (saves) it to the db, incl. indexing it:
Context.create = function (data, callback) {
    var node = db.createNode(data);
    var context = new Context(node);

    var query = [
        'CREATE (context:Context {data})',
        'RETURN context',
    ].join('\n');

    var params = {
        data: data
    };

    db.query(query, params, function (err, results) {
        if (err) return callback(err);
        var context = new Context(results[0]['context']);
        callback(null, context);
    });
};