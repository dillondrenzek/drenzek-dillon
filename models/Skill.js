var Skill = module.exports;
var MongoClient = require('mongodb').MongoClient;





// Create
Skill.create = function(newObject, callback){
	MongoClient.connect('mongodb://localhost:27017/drenzek-dillon', function(err, db) {
		if (err) throw err;

		db.collection('skills').insertOne(newObject, function(err, inserted){
			if (err) {
				callback(err, null);
			};

			console.log("inserted", inserted);

			callback(null, inserted);

			db.close();
		});
	});
};


// List
Skill.getAll = function(callback){
	MongoClient.connect('mongodb://localhost:27017/drenzek-dillon', function(err, db) {
		if (err) throw err;

		db.collection('skills').find({}).toArray(function(err, docs){
			if (err) throw err;

			callback(null, docs);

			db.close();
		});
	});
};

// Show
Skill.getOne = function(findObject, callback){};

// Update
Skill.update = function(updateObject, updateData, callback){};

// Delete
Skill.destroy = function(destroyObject, callback){};