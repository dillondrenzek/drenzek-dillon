 // Project Seed Data
// Version 2.4.1

var projects = module.exports = {};

projects.v3 = {
    current:[{}, {}, {}],
    featured: [{}]
}


// var seedProjects = { 
//                     all: [
//                         {
//                             title: "Capstone Portfolio Website",
//                             descriptors: ["Website"],
//                             points: [""],
//                             // type: "Website",
//                             skills: ["Node.js", "Neo4j", "Stylus", "Jade"],
//                             description: "A major project in my Capstone class during the Spring of 2015. I went above and beyond the requirements by using Node and the graph database, Neo4j. This is the first version of the site you're on :)",
//                             launchURL: "http://drenzek-capstone-portfolio.herokuapp.com",
//                             githubURL: "https://github.com/dillondrenzek/drenzek-capstone-portfolio",
//                             imageURLs: ["/images/capstone-portfolio-1.jpg",
//                                         "/images/capstone-portfolio-2.jpg",
//                                         "/images/capstone-portfolio-3.jpg",
//                                         "/images/capstone-portfolio-4.jpg"]
//                         },
//                         {
//                             title: "Le Faux Désign Compagnie",
//                             descriptors: ["Branding", "Website"],
//                             points: ["Advanced Web Design Class",
//                                     "ASSIGN: Create a 'fake company'",
//                                     "They Seem Like Great People"],
//                             skills: ["HTML", "CSS", "UI Design", "Illustrator", "Sketch"],
//                             description: "I created a fake design company. The project was part of an advanced web design class I took in the Fall of 2014 at the University of Colorado.",
//                             imageURLs: ["/images/le-faux-1.png",
//                                         "/images/le-faux-2.jpg"]
//                         },
//                         {
//                             title: "Cold For Now, Always Wondering",
//                             descriptors: ["Artwork"],
//                             points: ["2015 CU Honors Journal Feature",
//                                     "Collage of My Photographs",
//                                     "Photoshop Composition"],
//                             skills: ["Photoshop", "Photography"],
//                             description: "On a frigid November night in Bozeman, Montana, I stood with my camera on a tripod aimed towards the heavens. With hot chocolate in hand, I pondered life's biggest questions. This piece was featured in the University of Colorado's 2015 Honors Journal.",
//                             imageURLs: ["/images/always-wondering.jpg"]
//                         },
//                         {
//                             title: "Capstone Project Portal",
//                             descriptors: ["Website"],
//                             points: [""],
//                             skills: ["Node.js", "Jade", "Stylus"],
//                             description: "A website for turning in assignments for my Capstone class in Spring 2015. I built an admin space into it to update the website throughout the year. Also where I fell in love with Node.js after porting the site from the Ruby DSL, Sinatra.",
//                             launchURL: "http://capstone.drenzek.com",
//                             githubURL: "https://github.com/dillondrenzek/drenzek-capstone",
//                             imageURLs: ["/images/capstone-portal.png"]
//                         },
//                         {
//                             title: "Gridrunner",
//                             descriptors: ["Game", "Website"],
//                             points: [""],
//                             skills: ["jQuery", "JavaScript", "HTML", "CSS"],
//                             description: "The team project I completed with my friend, Logan McCaul, from my Digital Media 2 class in Spring of 2014. The class was hooked the minute we let them play our game.",
//                             launchURL: "", // Needs to be put up
//                             githubURL: "https://github.com/dillondrenzek/gridrunner/tree/master/dm2-teamproject",
//                             imageURLs: ["/images/gridrunner.png"]
//                         },
//                         {
//                             title: "Storm Rebranding Case Study",
//                             descriptors: ["Website", "Branding", "Case Study"],
//                             points: ["Completed in Copenhagen, Denmark",
//                                     "Graphic Design Studio",
//                                     "Summer of 2015"],
//                             skills: ["Jade", "Stylus", "Node.js", "jQuery"],
//                             description: "A case study I did of the Graphic Design project I completed in Denmark during the Summer of 2015.",
//                             launchURL: "http://drenzek-storm-feature.herokuapp.com/",
//                             githubURL: "https://github.com/dillondrenzek/storm-feature",
//                             imageURLs: ["/images/storm.jpg"]
//                         },
//                         {
//                             title: "Drenzek Does Denmark",
//                             descriptors: ["Blog", "Website"],
//                             points:["My first Angular.js app"],
//                             // type: "Blog",
//                             skills: ["Angular.js", "MongoDB", "Node.js", "Jade", "Stylus"],
//                             description: "A simple blog I created while I was in Denmark to practice using Angular.",
//                             launchURL: "http://denmark.drenzek.com",
//                             githubURL: "https://github.com/dillondrenzek/drenzek-does-denmark",
//                             imageURLs: ["/images/drenzek-does-denmark.png"]
//                         },
                        
//                     ],
//                     current: [ ],
//                     featured: [ ],


// new in 2.4.1
projects.v2 = [
        {
            title: "Cold For Now, Always Wondering",
            descriptors: ["Artwork"],
            points: ["2015 CU Honors Journal Feature",
                    "Collage of My Photographs",
                    "Photoshop Composition"],
            skills: ["Photoshop", "Photography"],
            description: "On a frigid November night in Bozeman, Montana, I stood with my camera on a tripod aimed towards the heavens. With hot chocolate in hand, I pondered life's biggest questions. This piece was featured in the University of Colorado's 2015 Honors Journal.",
            imageURLs: ["images/always-wondering.jpg"]
        },
        {
            title: "Le Faux Désign Compagnie",
            descriptors: ["Branding", "Website"],
            points: ["Advanced Web Design Class",
                    "ASSIGN: Create a 'fake company'",
                    "They Seem Like Great People"],
            skills: ["HTML", "CSS", "UI Design", "Illustrator", "Sketch"],
            description: "I created a fake design company. The project was part of an advanced web design class I took in the Fall of 2014 at the University of Colorado.",
            imageURLs: ["images/le-faux-1.png",
                        "images/le-faux-2.jpg"]
        },
        {
            title: "Capstone Portfolio Website",
            descriptors: ["Website"],
            points: [""],
            // type: "Website",
            skills: ["Node.js", "Neo4j", "Stylus", "Jade"],
            description: "A major project in my Capstone class during the Spring of 2015. I went above and beyond the requirements by using Node and the graph database, Neo4j. This is the first version of the site you're on :)",
            launchURL: "http://drenzek-capstone-portfolio.herokuapp.com",
            githubURL: "https://github.com/dillondrenzek/drenzek-capstone-portfolio",
            imageURLs: ["images/capstone-portfolio-1.jpg",
                        "images/capstone-portfolio-2.jpg",
                        "images/capstone-portfolio-3.jpg",
                        "images/capstone-portfolio-4.jpg"]
        },
        {
            title: "Capstone Project Portal",
            descriptors: ["Website"],
            points: [""],
            skills: ["Node.js", "Jade", "Stylus"],
            description: "A website for turning in assignments for my Capstone class in Spring 2015. I built an admin space into it to update the website throughout the year. Also where I fell in love with Node.js after porting the site from the Ruby DSL, Sinatra.",
            launchURL: "http://capstone.drenzek.com",
            githubURL: "https://github.com/dillondrenzek/drenzek-capstone",
            imageURLs: ["images/capstone-portal.png"]
        },
        {
            title: "Gridrunner",
            descriptors: ["Game", "Website"],
            points: [""],
            skills: ["jQuery", "JavaScript", "HTML", "CSS"],
            description: "The team project I completed with my friend, Logan McCaul, from my Digital Media 2 class in Spring of 2014. The class was hooked the minute we let them play our game.",
            launchURL: "", // Needs to be put up
            githubURL: "https://github.com/dillondrenzek/gridrunner/tree/master/dm2-teamproject",
            imageURLs: ["images/gridrunner.png"]
        },
        {
            title: "Storm Rebranding Case Study",
            descriptors: ["Website", "Branding", "Case Study"],
            points: ["Completed in Copenhagen, Denmark",
                    "Graphic Design Studio",
                    "Summer of 2015"],
            skills: ["Jade", "Stylus", "Node.js", "jQuery"],
            description: "A case study I did of the Graphic Design project I completed in Denmark during the Summer of 2015.",
            launchURL: "http://drenzek-storm-feature.herokuapp.com/",
            githubURL: "https://github.com/dillondrenzek/storm-feature",
            imageURLs: ["images/storm.jpg"]
        },
        // {
        //     title: "Le Faux Désign Compagnie",
        //     type: "Website / Branding",
        //     skills: ["jQuery", "CSS", "Illustrator", "Sketch", "UI Design"],
        //     description: "I created a fake design company. The project was part of an advanced web design class I took in the Fall of 2014 at the University of Colorado.",
        //     launchURL: "", // Eventually
        //     imageURLs: ["images/le-faux-1.png",
        //                 "images/le-faux-2.jpg"]
        // },
        {
            title: "Drenzek Does Denmark",
            descriptors: ["Blog", "Website"],
            points:["My first Angular.js app"],
            // type: "Blog",
            skills: ["Angular.js", "MongoDB", "Node.js", "Jade", "Stylus"],
            description: "A simple blog I created while I was in Denmark to practice using Angular.",
            launchURL: "http://denmark.drenzek.com",
            githubURL: "https://github.com/dillondrenzek/drenzek-does-denmark",
            imageURLs: ["images/drenzek-does-denmark.png"]
        },
        // {
        //     title: "Cold For Now, Always Wondering",
        //     type: "Artwork",
        //     skills: ["Photoshop", "Photography"],
        //     description: "On a frigid November night in Bozeman, Montana, I stood with my camera on a tripod aimed towards the heavens. With hot chocolate in hand, I pondered life's biggest questions. This piece was featured in the University of Colorado's 2015 Honors Journal.",
        //     imageURLs: ["images/always-wondering.jpg"]
        // }
        ];

projects.old = [
        {
            title: "Capstone Portfolio Website",
            type: "Website",
            skills: ["Node.js", "Neo4j", "Stylus", "Jade"],
            description: "A major project in my Capstone class during the Spring of 2015. I went above and beyond the requirements by using Node and the graph database, Neo4j. This is the first version of the site you're on :)",
            launchURL: "http://drenzek-capstone-portfolio.herokuapp.com",
            githubURL: "https://github.com/dillondrenzek/drenzek-capstone-portfolio",
            imageURLs: ["images/capstone-portfolio-1.jpg",
                        "images/capstone-portfolio-2.jpg",
                        "images/capstone-portfolio-3.jpg",
                        "images/capstone-portfolio-4.jpg"]
        },
        {
            title: "Capstone Project Portal",
            type: "Website",
            skills: ["Node.js", "Jade", "Stylus"],
            description: "A website for turning in assignments for my Capstone class in Spring 2015. I built an admin space into it to update the website throughout the year. Also where I fell in love with Node.js after porting the site from the Ruby DSL, Sinatra.",
            launchURL: "http://capstone.drenzek.com",
            githubURL: "https://github.com/dillondrenzek/drenzek-capstone",
            imageURLs: ["images/capstone-portal.png"]
        },
        {
            title: "Gridrunner",
            type: "Web Game",
            skills: ["jQuery", "JavaScript", "HTML", "CSS"],
            description: "The team project I completed with my friend, Logan McCaul, from my Digital Media 2 class in Spring of 2014. The class was hooked the minute we let them play our game.",
            launchURL: "", // Needs to be put up
            githubURL: "https://github.com/dillondrenzek/gridrunner/tree/master/dm2-teamproject",
            imageURLs: ["images/gridrunner.png"]
        },
        {
            title: "Storm Rebranding Case Study",
            type: "Website",
            skills: ["Jade", "Stylus", "Node.js", "jQuery"],
            description: "A case study I did of my Graphic Design project completed in Denmark during the Summer of 2015.",
            launchURL: "http://drenzek-storm-feature.herokuapp.com/",
            githubURL: "https://github.com/dillondrenzek/storm-feature",
            imageURLs: ["images/storm.jpg"]
        },
        {
            title: "Le Faux Désign Compagnie",
            type: "Website / Branding",
            skills: ["jQuery", "CSS", "Illustrator", "Sketch", "UI Design"],
            description: "I created a fake design company. The project was part of an advanced web design class I took in the Fall of 2014 at the University of Colorado.",
            launchURL: "", // Eventually
            imageURLs: ["images/le-faux-1.png",
                        "images/le-faux-2.jpg"]
        },
        {
            title: "Drenzek Does Denmark",
            type: "Blog",
            skills: ["Angular.js", "MongoDB", "Node.js", "Jade", "Stylus"],
            description: "A simple blog I created while I was in Denmark to practice using Angular.",
            launchURL: "http://denmark.drenzek.com",
            githubURL: "https://github.com/dillondrenzek/drenzek-does-denmark",
            imageURLs: ["images/drenzek-does-denmark.png"]
        },
        {
            title: "Cold For Now, Always Wondering",
            type: "Artwork",
            skills: ["Photoshop", "Photography"],
            description: "On a frigid November night in Bozeman, Montana, I stood with my camera on a tripod aimed towards the heavens. With hot chocolate in hand, I pondered life's biggest questions. This piece was featured in the University of Colorado's 2015 Honors Journal.",
            imageURLs: ["images/always-wondering.jpg"]
        }
        ];


