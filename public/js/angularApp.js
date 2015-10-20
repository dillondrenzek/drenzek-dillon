var app = angular.module('workApp', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider, $locationProvider){

	$stateProvider

	.state('home', {
		url: '/home',
		controller: 'MainCtrl',
		templateUrl: '/home.html',
		resolve: {

		}
	});

	$locationProvider.html5Mode(true);
	$urlRouterProvider.otherwise('home');


});


app.controller('MainCtrl', [
	'$scope',
	'skills',
	function($scope, skills){
		skills.getAll();

		$scope.pageTitle = ", The Work of";
		$scope.skills = skills.skills;
		// $scope.improvedSkills = skills.improved;
		// $scope
	}]);




app.factory('skills', [
	function(){
		var o = {
			getAll: function() {
				var seedSkills = { 
					all: [
						"HTML(5)",
						"CSS(3)",
						"jQuery",
						"Photoshop",
						"Illustrator",
						"Sketch",
						"JavaScript",
						"Stylus",
						"Jade",
						"Git/GitHub",
						"Mac OS X",
						"UNIX Command Line",
						"Express.js",
						"Node.js",
						"Bootstrap",
						"Gulp.js",
						"Linux",
						"WordPress",
						"Angular.js",
						"MongoDB",
						"Objective-C",
						"Swift",
						"Python",
						"REST APIs",
						"JSON",
						"AJAX",
						"C/C++",
						"Java"
					],
					improved: [
						{title: "JavaScript", value: "+++"},
						{title: "Python", value: "+++"},
						{title: "Java", value: "++"},
						{title: "Photoshop", value: "++"},
						{title: "Node.js", value: "+"},
						{title: "Illustrator", value: "+"}
					],
					web: [
						"HTML",
						"CSS",
						"JavaScript"
					],
					ui: [
						"Photoshop",
						"Illustrator",
						"Sketch"
					],
					programming: [
						"Objective-C",
						"Python",
						"Java"
					]

			};
				angular.copy(seedSkills, o.skills);
				return;
			},
			skills: []
		};
		return o;
	}]);