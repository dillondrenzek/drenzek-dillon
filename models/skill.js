// skill.js

var neo4j = require('neo4j');

var db = new neo4j.GraphDatabase(
	process.env['NEO4J_URL'] ||
	process.env['GRAPHENEDB_URL'] ||
	'http://localhost:7474'
);

var Skill = module.exports = function Skill(_node) {
	this._node = _node;
};

// public instance properties
Object.defineProperties(Skill.prototype, {

    'id': {
        enumerable: true,
        get: function () { return this._node.id; }
    },

    'title': {
        enumerable: true,
        get: function () { return this._node.data['title']; },
        set: function (title) { this._node.data['title'] = title; }
    },

    'color': {
        enumerable: true,
        get: function () { return this._node.data['color']; },
        set: function (color) { this._node.data['color'] = color; }
    }, 

    'type': {
        enumerable: true,
        get: function () { return this._node.data['type']; },
        set: function (type) { this._node.data['type'] = type; }
    }, 

    'description': {
        enumerable: true,
        get: function () { return this._node.data['description']; },
        set: function (description) { this._node.data['description'] = description; }
    },

    'save': {
        enumerable: false,
        value: save
    },

    'update': {
        enumerable: false,
        value: update
    },

    'del': {
        enumerable: false,
        value: del
    }
});


// public instance methods
var save = function (callback) {
    this._node.save(function (err) {
        callback(err);
    });
};

var update = function (data, callback) {

    var query = [
        'MATCH (skill: Skill)',
        'WHERE ID(skill) = {id}',
        'SET skill = {map}',
        'RETURN skill'
    ].join('\n');

    var params = {
        id: this.id,
        map: data
    }

    db.query(query, params, function (err, result) {
        if (err) return callback(err);
        callback(null, new Skill(result['skill']));
    });
}

var del = function (callback) {
    var query = [
        'MATCH (skill:Skill)',
        'WHERE ID(skill) = {skillId}',
        'DELETE skill'
    ].join('\n');

    var params = {
        skillId: this.id
    };

    db.query(query, params, function (err) {
        callback(err);
    });
};


// static methods:

Skill.get = function (id, callback) {
    db.getNodeById(id, function (err, node) {
        if (err) return callback(err);
        callback(null, new Skill(node));
    });
};

Skill.getAll = function (callback) {
    var query = [
        'MATCH (skill:Skill)',
        'RETURN skill',
    ].join('\n');

    db.query(query, null, function (err, results) {
        if (err) return callback(err);
        var skills = results.map(function (result) {
            return new Skill(result['skill']);
        });
        callback(null, skills);
    });
};


// creates the skill and persists (saves) it to the db, incl. indexing it:
Skill.create = function (data, callback) {
    var node = db.createNode(data);
    var skill = new Skill(node);

    var query = [
        'CREATE (skill:Skill {data})',
        'RETURN skill',
    ].join('\n');

    var params = {
        data: data
    };

    db.query(query, params, function (err, results) {
        if (err) return callback(err);
        var skill = new Skill(results[0]['skill']);
        callback(null, skill);
    });
};
