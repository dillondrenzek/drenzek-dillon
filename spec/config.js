exports.config = {
	framework: 'jasmine2',
	seleniumAddress: 'http://localhost:4444/wd/hub',
	specs:['./admin/*.js', './skills/*.js', './projects/*.js'],
	rootElement: '.app'
};