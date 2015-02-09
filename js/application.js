var Portfolio = Portfolio || {};

$(function(){
	new Portfolio.AppView();


	var itemOne = {
		name: 'Skill Two',
		projectedXP: 100
	};

	Portfolio.skills.add([
		{
			name: 'Haml',
			projectedXP: 100
		},
		{
			name: 'Sass',
			projectedXP: 100
		},
		{
			name: 'Ruby on Rails',
			projectedXP: 100
		},
		{
			name: 'Sinatra',
			projectedXP: 100
		},
		{
			name: 'Backbone.js',
			projectedXP: 100
		},
		{
			name: 'Node.js',
			projectedXP: 100
		},
		{
			name: 'C',
			projectedXP: 100
		},
		{
			name: 'C++',
			projectedXP: 100
		},
		{
			name: 'Python',
			projectedXP: 100
		},
		{
			name: 'Ruby',
			projectedXP: 100
		},
		{
			name: 'HTML',
			projectedXP: 100
		},
		{
			name: 'CSS',
			projectedXP: 100
		},
		{
			name: 'JavaScript',
			projectedXP: 100
		},
		{
			name: 'jQuery',
			projectedXP: 100
		},
		{
			name: 'Objective C',
			projectedXP: 100
		},
		{
			name: 'Swift',
			projectedXP: 100
		},
		{
			name: 'Shell Script',
			projectedXP: 100
		},
		{
			name: 'Java',
			projectedXP: 100
		},
		{
			name: 'Assembly',
			projectedXP: 100
		},
		{
			name: 'Scala',
			projectedXP: 100
		}, new Portfolio.Language()

	]);
});
