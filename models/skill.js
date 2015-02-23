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
Object.defineProperty(Skill.prototype, 'color', {
	get: function () {
		return this._node.data['color'];
	},
	set: function (color) {
		this._node.data['color'] = color;
	}
	});
Object.defineProperty(Skill.prototype, 'overall', {
	get: function () {
		return this._node.data['overall'];
	},
	set: function (overall) {
		this._node.data['overall'] = overall;
	}
	});
Object.defineProperty(Skill.prototype, 'experience', {
	get: function () {
		return this._node.data['experience'];
	},
	set: function (experience) {
		this._node.data['experience'] = experience;
	}
	});
Object.defineProperty(Skill.prototype, 'outlook', {
	get: function () {
		return this._node.data['outlook'];
	},
	set: function (outlook) {
		this._node.data['outlook'] = outlook;
	}
	});
Object.defineProperty(Skill.prototype, 'love', {
	get: function () {
		return this._node.data['love'];
	},
	set: function (love) {
		this._node.data['love'] = love;
	}
	});
Object.defineProperty(Skill.prototype, 'since', {
	get: function () {
		return this._node.data['since'];
	},
	set: function (since) {
		this._node.data['since'] = since;
	}
	});


// public instance methods
Skill.prototype.save = function (callback) {
    this._node.save(function (err) {
        callback(err);
    });
};

Skill.prototype.del = function (callback) {
    // use a Cypher query to delete both this skill and his/her following
    // relationships in one transaction and one network request:
    // (note that this'll still fail if there are any relationships attached
    // of any other types, which is good because we don't expect any.)
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
// Skill.seedFromJSON = function (json, callback) {
//     var result = db.fromJSON(json);
//     console.log("result", result);
// };

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
    // construct a new instance of our class with the data, so it can
    // validate and extend it, etc., if we choose to do that in the future:
    var node = db.createNode(data);
    var skill = new Skill(node);

    // but we do the actual persisting with a Cypher query, so we can also
    // apply a label at the same time. (the save() method doesn't support
    // that, since it uses Neo4j's REST API, which doesn't support that.)
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
