// spec.js
// v3.0.4

describe('Test', function(){
	it('should have a title', function(){
		browser.get('http://localhost:8080/the-work-of');

		expect(browser.getTitle()).toEqual('Dillon Drenzek, The Work Of');
	});
});