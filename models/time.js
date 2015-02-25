// time.js

var neo4j = require('neo4j');

var db = new neo4j.GraphDatabase(
	process.env['NEO4J_URL'] ||
	process.env['GRAPHENEDB_URL'] ||
	'http://localhost:7474'
);

var Time = module.exports = function Time(_node) {
	this._node = _node;
};


// public instance properties
Object.defineProperty(Time.prototype, 'id', {
    get: function () { return this._node.id; }
});

Object.defineProperty(Time.prototype, 'title', {
    get: function () {
        return this._node.data['title'];
    },
    set: function (title) {
        this._node.data['title'] = title;
    }
    });

Object.defineProperty(Time.prototype, 'start', {
    get: function () {
        return this._node.data['start'];
    },
    set: function (start) {
        this._node.data['start'] = start;
    }
    });

Object.defineProperty(Time.prototype, 'end', {
    get: function () {
        return this._node.data['end'];
    },
    set: function (end) {
        this._node.data['end'] = end;
    }
	});



// public instance methods
Time.prototype.save = function (callback) {
    this._node.save(function (err) {
        callback(err);
    });
};

Time.prototype.del = function (callback) {
    var query = [
        'MATCH (time:Time)',
        'WHERE ID(time) = {timeId}',
        'DELETE time'
    ].join('\n');

    var params = {
        timeId: this.id
    };

    db.query(query, params, function (err) {
        callback(err);
    });
};

Time.prototype.update = function (data, callback) {

    var query = [
        'MATCH (time: Time)',
        'WHERE ID(time) = {id}',
        'SET time = {map}',
        'RETURN time'
    ].join('\n');

    var params = {
        id: this.id,
        map: data
    }

    db.query(query, params, function (err, result) {
        if (err) return callback(err);
        callback(null, new Time(result['time']));
    });
}

// static methods:

Time.get = function (id, callback) {
    db.getNodeById(id, function (err, node) {
        if (err) return callback(err);
        callback(null, new Time(node));
    });
};

Time.getAll = function (callback) {
    var query = [
        'MATCH (time:Time)',
        'RETURN time',
    ].join('\n');

    db.query(query, null, function (err, results) {
        if (err) return callback(err);
        var times = results.map(function (result) {
            return new Time(result['time']);
        });
        callback(null, times);
    });
};


// creates the time and persists (saves) it to the db, incl. indexing it:
Time.create = function (data, callback) {
    var node = db.createNode(data);
    var time = new Time(node);

    var query = [
        'CREATE (time:Time {data})',
        'RETURN time',
    ].join('\n');

    var params = {
        data: data
    };

    db.query(query, params, function (err, results) {
        if (err) return callback(err);
        var time = new Time(results[0]['time']);
        callback(null, time);
    });
};