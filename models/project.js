// project.js
// version 0.5.0
var neo4j = require('neo4j');

var db = new neo4j.GraphDatabase(
	process.env['NEO4J_URL'] ||
	process.env['GRAPHENEDB_URL'] ||
	'http://localhost:7474'
);

//
//  Constructor
//
var Project = module.exports = function Project(_node) {
	this._node = _node;
};

//
//  Properties
//
Object.defineProperties(Project.prototype, {
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

    'save': {
        enumerable: false,
        value: function (callback) {
            this._node.save(function (err) {
                callback(err);
            });
        }
    },

    'update': {
        enumerable: false,
        value: function (data, callback) {

            var query = [
                'MATCH (project: Project)',
                'WHERE ID(project) = {id}',
                'SET project = {map}',
                'RETURN project'
            ].join('\n');

            var params = {
                id: this.id,
                map: data
            };

            db.query(query, params, function (err, result) {
                if (err) return callback(err);
                callback(null, new Project(result['project']));
            });
        }
    },

    'del': {
        enumerable: false,
        value: function (callback) {
            var query = [
                'MATCH (project:Project)',
                'WHERE ID(project) = {projectId}',
                'DELETE project'
            ].join('\n');

            var params = {
                projectId: this.id
            };

            db.query(query, params, function (err) {
                callback(err);
            });
        }
    }

});


//
//  Public Class Methods
//
Project.get = function (id, callback) {
    db.getNodeById(id, function (err, node) {
        if (err) return callback(err);
        callback(null, new Project(node));
    });
};

Project.getAll = function (callback) {
    var query = [
        'MATCH (project:Project)',
        'RETURN project',
    ].join('\n');

    db.query(query, null, function (err, results) {
        if (err) return callback(err);
        var projects = results.map(function (result) {
            return new Project(result['project']);
        });
        callback(null, projects);
    });
};

Project.create = function (data, callback) {
    var node = db.createNode(data);
    var project = new Project(node);

    var query = [
        'CREATE (project:Project {data})',
        'RETURN project',
    ].join('\n');

    var params = {
        data: data
    };

    db.query(query, params, function (err, results) {
        if (err) return callback(err);
        var project = new Project(results[0]['project']);
        callback(null, project);
    });
};