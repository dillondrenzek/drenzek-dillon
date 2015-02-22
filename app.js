// Module Dependencies

var express = require('express')
  , routes = require('./routes')
  , http = require('http')
  , path = require('path');

var app = express();

app.set('port', process.env.PORT || 9876);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.bodyParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', routes.index);
app.get('/skills', routes.skills.list);
app.get('/skills/new', routes.skills.new);
app.post('/skills/new', routes.skills.create);
app.del('/skills/:id', routes.skills.destroy);

// REMOVE
app.get('/skills/seed', function (req, res, next) {

	var Skill = require('./models/skill'),
		skillsArray = require('./json/data.json').skills;

	// erase any skills
    Skill.getAll (function (err, skills) {
        if (err) return next(err);
        // skills.each
        skills.forEach( function(skill, i, arr) {
        	skill.del(function (err) {
		        if (err) return next(err);
		    });
        });
    });


    // re-seed db
    skillsArray.forEach( function(el, i, arr) {
    	Skill.create(el, function(err, result) {
    		if (err) return next(err);
    		console.log("Created Skill:", el.title);
    	});
    });

    res.redirect('/skills');
});

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening at: http://localhost:%d/', app.get('port'));
});