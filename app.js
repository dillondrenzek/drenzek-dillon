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

// APP ROUTES
app.get('/', routes.site.index);
app.get('/seed', routes.site.seed);

// SKILL ROUTES
app.get('/skills', routes.skills.list);
app.get('/skills/new', routes.skills.new);
app.get('/skills/edit', routes.skills.list_edit);
app.get('/skills/:id', routes.skills.show);
app.get('/skills/edit/:id', routes.skills.edit);
app.post('/skills/new', routes.skills.create);
app.post('/skills/edit/:id', routes.skills.update);
app.post('/skills/destroy/:id', routes.skills.destroy);

// PROJECT ROUTES
app.get('/projects', routes.projects.list);
app.get('/projects/new', routes.projects.new);
app.get('/projects/edit', routes.projects.list_edit);
app.get('/projects/:id', routes.projects.show);
app.get('/projects/edit/:id', routes.projects.edit);
app.post('/projects/new', routes.projects.create);
app.post('/projects/edit/:id', routes.projects.update);
app.post('/projects/destroy/:id', routes.projects.destroy);

// TIME ROUTES
app.get('/times', routes.times.list);
app.get('/times/new', routes.times.new);
app.get('/times/edit', routes.times.list_edit);
app.get('/times/:id', routes.times.show);
app.get('/times/edit/:id', routes.times.edit);
app.post('/times/new', routes.times.create);
app.post('/times/edit/:id', routes.times.update);
app.post('/times/destroy/:id', routes.times.destroy);

// CONTEXT ROUTES
app.get('/contexts', routes.contexts.list);
app.get('/contexts/new', routes.contexts.new);
app.get('/contexts/edit', routes.contexts.list_edit);
app.get('/contexts/:id', routes.contexts.show);
app.get('/contexts/edit/:id', routes.contexts.edit);
app.post('/contexts/new', routes.contexts.create);
app.post('/contexts/edit/:id', routes.contexts.update);
app.post('/contexts/destroy/:id', routes.contexts.destroy);




http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening at: http://localhost:%d/', app.get('port'));
});