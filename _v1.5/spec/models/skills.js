// TODO: Add tests for each:
// app.get('/skills/:id', routes.skills.show);
// app.get('/skills/new', routes.skills.new);
// app.post('/skills/new', routes.skills.create);
// app.get('/skills/edit', routes.skills.list_edit);
// app.post('/skills/edit/:id', routes.skills.update)
// app.post('/skills/destroy/:id', routes.skills.destroy);


var Skill = require('../../models/skill');


describe( "Skill models", function(){

    describe( "[Create]:" , function(){
        it("GET '/skills/new'", function(){
            // No Tests Yet, Okay to Pass
        });

        it("POST '/skills/new'", function(){
            var title = "Test Skill A";
            Skill.create({ title: title
                         , color: "#1ce"
                         , overall: "0"
                         , experience: "high"
                         , outlook: "great"
                         , love: 4
                         , since: "July 2008"}
                        , function (err, skill) {
                            expect(skill.id).toEqual(jasmine.any(Number));
                            expect(skill.title).toEqual(title);
                        });    
        });
    });

    describe( "[Read]:", function(){

        it("GET '/skills'", function(){
            Skill.getAll(function (err, skills) {
                expect(skills).toEqual(jasmine.any(Array));
                expect(skills.length).toBeGreaterThan(0);
            });
        });

        it("GET '/skills/:id'", function(){
            Skill.create({ title: "title"
                 , color: "#1ce"
                 , overall: "0"
                 , experience: "high"
                 , outlook: "great"
                 , love: 4
                 , since: "July 2008"}
                , function (err, skill) {
                    expect(skill.id).toEqual(jasmine.any(Number));
                    expect(skill.title).toEqual("title");

                    Skill.get( skill.id, function (err, getSkill) {
                        expect(getSkill.title).toEqual("title");
                    });
                });
        });

    });



    describe( "[Update]:" , function(){

        it("GET '/skills/edit/:id'", function(){
            Skill.create({ title: "title"
                 , color: "#1ce"
                 , overall: "0"
                 , experience: "high"
                 , outlook: "great"
                 , love: 4
                 , since: "July 2008"}
                , function (err, skill) {
                    expect(skill.id).toEqual(jasmine.any(Number));
                    expect(skill.title).toEqual("title");

                    skill.title = "new title";
                    expect(skill.title).toEqual("new title");

                    skill.save( function (err){

                        Skill.get( skill.id, function (err, getSkill) {
                            expect(getSkill.title).toEqual("new title");
                        });
                    });
                }); 
        });
        
        it("GET '/skills/edit'", function(){
            Skill.getAll(function (err, skills) {
                expect(skills).toEqual(jasmine.any(Array));
                expect(skills.length).toBeGreaterThan(0);
            });
        });

        it("POST '/skills/edit/:id", function(){
            Skill.create({ title: "title"
                 , color: "#1ce"
                 , overall: "0"
                 , experience: "high"
                 , outlook: "great"
                 , love: 4
                 , since: "July 2008"}
                , function (err, skill) {
                    expect(skill.id).toEqual(jasmine.any(Number));
                    expect(skill.title).toEqual("title");

                    skill.title = "new title";
                    expect(skill.title).toEqual("new title");

                    skill.save( function (err){

                        Skill.get( skill.id, function (err, getSkill) {
                            expect(getSkill.title).toEqual("new title");
                        });
                    });
                });
        });
        
    });

    describe( "[Destroy]:" , function(){

        it("POST '/skills/destroy/:id", function(){


            Skill.create({ title: "title"
                         , color: "#1ce"
                         , overall: "0"
                         , experience: "high"
                         , outlook: "great"
                         , love: 4
                         , since: "July 2008"}
                        , function (err, skill) {
                            expect(skill.id).toEqual(jasmine.any(Number));
                            expect(skill.title).toEqual(title);
                        
                            skill.del(function (err) {
                                expect(skill).toBeUndefined();
                            });
                        }); 
        });
    });
});
