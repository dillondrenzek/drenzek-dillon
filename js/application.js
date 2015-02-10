var Portfolio = Portfolio || {};

$(function(){
	var view = new Portfolio.AppView();

	Portfolio.Profile = new Profile();

	Portfolio.Skills.add(Portfolio.Profile.skills);
	Portfolio.Skills.add(Portfolio.Profile.languages);
});
