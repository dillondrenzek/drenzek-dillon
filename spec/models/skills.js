//
// skill model tests. These are basically CRUD tests, ordered to let us test
// all cases, plus listing all skills and following/unfollowing between skills.
//
// It's worth noting that there may already be skills in the database, so these
// tests must not assume the initial state is empty.
//
// High-level test plan:
//
// - List initial skills.
// - Create a skill A.
// - Fetch skill A. Should be the same.
// - List skills again; should be initial list plus skill A.
// - Update skill A, e.g. its name.
// - Fetch skill A again. It should be updated.
// - Delete skill A.
// - Try to fetch skill A again; should fail.
// - List skills again; should be back to initial list.

// - Create two skills in parallel, B and C.
// - Fetch both skill's "following and others"; both should show no following.
// - Have skill B follow skill C.
// - Have skill B follow skill C again; should be idempotent.
// - Fetch skill B's "following and others"; should show following skill C.
// - Fetch skill C's "following and others"; should show not following skill B.
// - Have skill B unfollow skill C.
// - Have skill B unfollow skill C again; should be idempotent.
// - Fetch both skills' "following and others" again; both should follow none.

// - Create a skill D.
// - Have skill B follow skill C follow skill D.
// - Fetch all skills' "following and others"; should be right.
// - Delete skill B.
// - Fetch skill C's and D's "following and others"; should be right.
// - Delete skill D.
// - Fetch skill C's "following and others"; should be right.
// - Delete skill C.


var Skill = require('../../models/skill');


// Shared state:

// Tests:

describe("Skill models:", function() {

    // - List initial skills.
    it("List initial skills", function (next) {
        Skill.getAll(function (err, skills) {
            if (err) return next(err);

            // expect(skills).to.be.an('array');
            skills.forEach(function (skill) {
                expectSkill(skill);
            });

            this.INITIAL_SKILLS = skills;
            return next();
        });
    });

    // - Create skill A
    it("Create Skill A", function (next) {
        var title = "Test Skill A";
        Skill.create({ title: title
             , color: "#1ce"
             , overall: "0"
             , experience: "high"
             , outlook: "great"
             , love: 4
             , since: "July 2008"}, function (err, skill) {
            if (err) {return next(err)};

            expect(skill.id).toEqual(jasmine.any(Number));
            expect(skill.title).toEqual(title);
            this.SKILL_A = skill;
            return next();
        });
    });

    it("Fetch User A", function () {
        Skill.get(this.SKILL_A.id, function (err, skill) {
            if (err) {return next(err)};

            expect(skill).toEqual(this.SKILL_A);
            return next();
        });
    });

    it("List skills again", function (next) {
        Skill.getAll(function (err, skills) {
            if (err) return next(err);

            expect(skills).toEqual(jasmine.any(Array));
            expect(skills.length).toEqual(this.INITIAL_SKILLS.length + 1);
            expect(skills).toEqual(jasmine.arrayContaining([this.SKILL_A]));

            return next();
        });
    });

    it("Update Skill A", function (next) {
        var initialTitle = this.SKILL_A.title;
        expect(initialTitle).toEqual(jasmine.any(String));
        this.SKILL_A.title += ' (edited)';
        this.SKILL_A.save(function (err) {
            return next(err);
        });

        Skill.get(this.SKILL_A.id, function (err, skill) {
            if (err) return next(err);
            expectSkill(skill, this.SKILL_A);
            expect(this.SKILL_A.title).to.equal(initialTitle + ' (edited)');
            return next();
        });
    });

    it('Delete user A', function (next) {
        this.SKILL_A.del(function (err) {
            return next(err);
        });
    });

    xit('Attempt to fetch user A again', function (next) {
        User.get(USER_A.id, function (err, user) {
            expect(user).to.not.exist;  // i.e. null or undefined
            expect(err).to.be.an('object');
            expect(err).to.be.an.instanceOf(Error);
            return next();
        });
    });

    xit('List users again', function (next) {
        User.getAll(function (err, users) {
            if (err) return next(err);

            // like before, we just test that this array is now back to the
            // initial length, and *doesn't* contain user A.
            expect(users).to.be.an('array');
            expect(users).to.have.length(INITIAL_USERS.length);
            expectUsersToNotContain(users, USER_A);

            return next();
        });
    });


});

//     it('Fetch user A', function (next) {
//         User.get(USER_A.id, function (err, user) {
//             if (err) return next(err);
//             expectUser(user, USER_A);
//             return next();
//         });
//     });

//     it('List users again', function (next) {
//         User.getAll(function (err, users) {
//             if (err) return next(err);

//             // the order isn't part of the contract, so we just test that the
//             // new array is one longer than the initial, and contains user A.
//             expect(users).to.be.an('array');
//             expect(users).to.have.length(INITIAL_USERS.length + 1);
//             expectUsersToContain(users, USER_A);

//             return next();
//         });
//     });

//     it('Update user A', function (next) {
//         USER_A.name += ' (edited)';
//         USER_A.save(function (err) {
//             return next(err);
//         });
//     });

//     it('Fetch user A again', function (next) {
//         User.get(USER_A.id, function (err, user) {
//             if (err) return next(err);
//             expectUser(user, USER_A);
//             return next();
//         });
//     });



//     // Two-user following:

//     it('Create users B and C', function (next) {
//         var nameB = 'Test User B';
//         var nameC = 'Test User C';

//         function callback(err, user) {
//             if (err) return next(err);

//             expectUser(user);

//             switch (user.name) {
//                 case nameB:
//                     USER_B = user;
//                     break;
//                 case nameC:
//                     USER_C = user;
//                     break;
//                 default:
//                     // trigger an assertion error:
//                     expect(user.name).to.equal(nameB);
//             }

//             if (USER_B && USER_C) {
//                 return next();
//             }
//         }

//         User.create({name: nameB}, callback);
//         User.create({name: nameC}, callback);
//     });

//     it('Fetch user B’s “following and others”', function (next) {
//         expectUserToFollow(USER_B, [], [USER_C], function (err, following, others) {
//             if (err) return next(err);

//             // our helper tests most things; we just test the length of others:
//             expect(others).to.have.length(INITIAL_USERS.length + 1);

//             return next();
//         });
//     });

//     it('Fetch user C’s “following and others”', function (next) {
//         expectUserToFollow(USER_C, [], [USER_B], function (err, following, others) {
//             if (err) return next(err);

//             // our helper tests most things; we just test the length of others:
//             expect(others).to.have.length(INITIAL_USERS.length + 1);

//             return next();
//         });
//     });

//     it('Have user B follow user C', function (next) {
//         USER_B.follow(USER_C, function (err) {
//             return next(err);
//         });
//     });

//     it('Have user B follow user C again', function (next) {
//         USER_B.follow(USER_C, function (err) {
//             return next(err);
//         });
//     });

//     it('Fetch user B’s “following and others”', function (next) {
//         expectUserToFollow(USER_B, [USER_C], [], next);
//     });

//     it('Fetch user C’s “following and others”', function (next) {
//         expectUserToFollow(USER_C, [], [USER_B], next);
//     });

//     it('Have user B unfollow user C', function (next) {
//         USER_B.unfollow(USER_C, function (err) {
//             return next(err);
//         });
//     });

//     // NOTE: skipping this actually causes the next two tests to fail!
//     it('Have user B unfollow user C again', function (next) {
//         USER_B.unfollow(USER_C, function (err) {
//             return next(err);
//         });
//     });

//     it('Fetch user B’s “following and others”', function (next) {
//         expectUserToFollow(USER_B, [], [USER_C], next);
//     });

//     it('Fetch user C’s “following and others”', function (next) {
//         expectUserToFollow(USER_C, [], [USER_B], next);
//     });

//     // Multi-user-following deletions:

//     it('Create user D', function (next) {
//         var name = 'Test User D';
//         User.create({name: name}, function (err, user) {
//             if (err) return next(err);

//             expectUser(user);
//             expect(user.name).to.be.equal(name);

//             USER_D = user;
//             return next();
//         });
//     });

//     it('Have user B follow user C follow user D', function (next) {
//         var remaining = 2;

//         function callback(err) {
//             if (err) return next(err);
//             if (--remaining === 0) {
//                 next();
//             }
//         }

//         USER_B.follow(USER_C, callback);
//         USER_C.follow(USER_D, callback);
//     });

//     it('Fetch all user’s “following and others”', function (next) {
//         var remaining = 3;

//         function callback(err) {
//             if (err) return next(err);
//             if (--remaining === 0) {
//                 next();
//             }
//         }

//         expectUserToFollow(USER_B, [USER_C], [USER_D], callback);
//         expectUserToFollow(USER_C, [USER_D], [USER_B], callback);
//         expectUserToFollow(USER_D, [], [USER_B, USER_C], callback);
//     });

//     it('Delete user B', function (next) {
//         USER_B.del(function (err) {
//             return next(err);
//         });
//     });

//     it('Fetch user C’s and D’s “following and others”', function (next) {
//         var remaining = 2;

//         function callback(err) {
//             if (err) return next(err);
//             if (--remaining === 0) {
//                 next();
//             }
//         }

//         expectUserToFollow(USER_C, [USER_D], [], callback);
//         expectUserToFollow(USER_D, [], [USER_C], callback);
//     });

//     it('Delete user D', function (next) {
//         USER_D.del(function (err) {
//             return next(err);
//         });
//     });

//     it('Fetch user C’s “following and others”', function (next) {
//         expectUserToFollow(USER_C, [], [], next);
//     });

//     it('Delete user C', function (next) {
//         USER_C.del(function (err) {
//             return next(err);
//         });
//     });

// });