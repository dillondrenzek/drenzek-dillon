var store = exports = module.exports;
var fs = require('fs'),
	path = require('path');

store.loadJSON = function ( file, fn ) {
	var directory = __dirname + '/json/' + file;

	var file = fs.readFile(directory, 'utf8', function (err, data) {
	  	if (err) throw err;
	  	var assignments = JSON.parse(data).assignments
	  	store.assignments = assignments; 
		fn(null, assignments);
	});
	return ;
}

