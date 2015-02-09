var Portfolio = Portfolio || {};

$(function(){
	new Portfolio.AppView();

	Portfolio.skills.add([new Portfolio.Skill({
		name: 'Skill One',
		projectedXP: 100
	}), new Portfolio.Skill({
		name: 'Alphabet Saying',
		projectedXP: 100
	}), new Portfolio.Skill({
		name: 'Photoshop',
		projectedXP: 300
	})]);
});
