// The Work of
// Angular app
// version 3.0.1

var app = angular.module('workApp', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider, $locationProvider){

	$stateProvider
	.state('home', {
		url: '/home',
		controller: 'MainCtrl',
		templateUrl: '/home.html', 
		resolve: {
			skillPromise: ['skills', function(skills){
				return skills.getAll();
			}],
			projectPromise: ['projects', function(projects){
				return projects.getAll();
			}]
		}
	})

	.state('login', {
		url: '/login',
		controller: 'LoginCtrl',
		templateUrl: '/login.html'
	})

	.state('admin', {
		url: '/admin',
		controller: 'AdminCtrl',
		templateUrl: '/admin.html',
		resolve: {
			skillPromise: ['skills', function(skills){
				return skills.getAll();
			}],
			projectPromise: ['projects', function(projects){
				return projects.getAll();
			}]
		}
	});

	$locationProvider.html5Mode(true);
	$urlRouterProvider.otherwise('home');
});





app.controller('AdminCtrl', [
	'$scope',
	'skills',
	'projects',
	function($scope, skills, projects){
		// skills.getAll();
		// projects.getAll();
		$scope.pageTitle = "Admin Home";
		$scope.skills = skills.skills;
		$scope.projects = projects.projects;
	}]);

app.controller('LoginCtrl', [
	'$scope',
	function($scope){
		$scope.pageTitle = "Login";
	}]);

app.controller('MainCtrl', [
	'$scope',
	'skills',
	'projects',
	function($scope, skills, projects){
		// skills.getAll();
		// projects.getAll();

		$scope.pageTitle = ", The Work of";
		$scope.skills = skills.skills;
		$scope.projects = projects.projects;
	}]);





app.factory('skills', [
	'$http',
	function($http){
		var o = {
			getAll: function() {
				return $http.get('/api/skills').success(function(data){
					angular.copy(data, o.skills);
				});
			},
			skills: []
		};
		return o;
	}]);

app.factory('projects', [
	'$http',
	function($http){
		var o = {
			getAll: function() {
				return $http.get('/api/projects').success(function(data){
					angular.copy(data, o.projects);
				});
			},
			projects: []
		};
		return o;
	}]);