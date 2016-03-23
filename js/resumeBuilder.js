var bio = {
    "name" : "Chandler Wilson",
    "role" : "Student",
    "contacts" : {
        "mobile" : "512-585-8163",
        "email" : "chandler9wilson@gmail.com",
        "github" : "github.com/chandler9wilson",
        "location" : "Austin"
    },
    "welcomeMessage" : "Hello",
    "skills" : ["web-development", "gulp", "sass"],
    "biopic" : "images/chandler_pic.jpeg",
    display: function(){
        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
        var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

        var formattedContactInfo = [];
        formattedContactInfo.push(HTMLemail.replace("%data%", bio.contacts.email));
        formattedContactInfo.push(HTMLgithub.replace("%data%", bio.contacts.github));
        formattedContactInfo.push(HTMLlocation.replace("%data%", bio.contacts.location));

        $("#header").prepend(formattedRole);
        $("#header").prepend(formattedName);
        $("#header").append(formattedBioPic);
        $("#header").append(formattedWelcomeMsg);

        for(i in formattedContactInfo) {
            $("#topContacts").append(formattedContactInfo[i]);
            $("#footerContacts").append(formattedContactInfo[i]);
        }

        if(bio.skills.length > 0) {
            $("#header").append(HTMLskillsStart);
            for(var i = 0; i < bio.skills.length; i++) {
                $("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
            }
        }
    }
}

bio.display();

var education = {
    "schools" : {
        "name" : "HSANA",
        "location" : "Pflugerville",
        "dates" : "2013-2015",
        "url" : "hsana.org"
    },
    "onlineCourses" : {
        "title" : "Front-End Nanodegree",
        "school" : "Udacity",
        "date" : "2016",
        "url" : "udacity.com"
    },
    display: function(){

    }
}

var work = {
    "jobs" : {
        "employer" : "Harbor Freight Tools",
        "title" : "sales associate",
        "location" : "Austin",
        "dates" : "2014-2015",
        "description" : "Worked as a cashier and on the sales floor"
    },
    display: function(){

    }
}

var projects = {
    "projects" : {
        "title" : "frogger-clone",
        "dates" : "2016",
        "description" : "A reskinned frogger clone created in javascript",
        "images" : "https://upload.wikimedia.org/wikipedia/en/thumb/c/cd/Frogger_game_arcade.png/220px-Frogger_game_arcade.png"
    },
    display: function(){

    }
}


