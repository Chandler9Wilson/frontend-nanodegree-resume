var bio = {
    "name": "Chandler Wilson",
    "role": "Student",
    "contacts": {
        "mobile": "512-585-8163",
        "email": "chandler9wilson@gmail.com",
        "github": "github.com/chandler9wilson",
        "location": "Austin"
    },
    "welcomeMessage": "Hello I am a full time student in computer science",
    "skills": ["web-development", "gulp", "sass"],
    "biopic": "images/CW_logo-medium.png",
    display: function() {
        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
        var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);

        var formattedContactInfo = [];
        formattedContactInfo.push(HTMLemail.replace("%data%", bio.contacts.email));
        formattedContactInfo.push(HTMLgithub.replace("%data%", bio.contacts.github));
        formattedContactInfo.push(HTMLlocation.replace("%data%", bio.contacts.location));

        $("#header").prepend(formattedName, formattedRole);
        $(".subHeader").prepend(formattedWelcomeMsg, formattedBioPic);

        for (var i = 0; i < formattedContactInfo.length; i++) {
            $("#topContacts").append(formattedContactInfo[i]);
            $("#footerContacts").append(formattedContactInfo[i]);
        }

        if (bio.skills.length > 0) {
            $(".glance").append(HTMLskillsStart);
            for (i = 0; i < bio.skills.length; i++) {
                $("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
            }
        }
    }
};

var education = {
    "schools": [
        {
            "name": "TAMU",
            "location": "College Station, Texas, USA",
            "dates": "2010-2015",
            "url": "tamu.edu",
            "majors": ["Electrical Engineering"],
            "degree": "B.sc Electrical Engineering"
        }
    ],
    "onlineCourses": [
        {
            "title": "Front-End Nanodegree",
            "school": "Udacity",
            "date": "2016",
            "url": "udacity.com"
        }
    ],
    display: function() {
        if (education.schools.length || education.onlineCourses.length) {
            for (var i = 0; i < education.schools.length; i++) {
                $("#education").append(HTMLschoolStart);

                var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name).replace("#", education.schools[i].url);
                var formattedSchoolDate = HTMLschoolDates.replace("%data%", education.schools[i].dates);
                var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
                var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].major);
                var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);

                $(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree, formattedSchoolDate, formattedSchoolLocation, formattedSchoolMajor)
            }
            if (education.onlineCourses.length > 0) {
                $("#education").append(HTMLonlineClasses);

                for (i = 0; i < education.onlineCourses.length; i++) {
                    $("#education").append(HTMLschoolStart);
                    
                    var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title).replace("#", education.onlineCourses[i].url);
                    var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
                    var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].completed);
                    var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url).replace("#", education.onlineCourses[i].url);

                    $(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool, formattedOnlineDates, formattedOnlineURL);
                }
            }
        }
    }
};

var work = {
    "jobs": [
        {
            "employer": "Harbor Freight Tools",
            "title": "sales associate",
            "location": "Austin",
            "dates": "2014-2015",
            "description": "Worked as a cashier and on the sales floor"
        }
    ],
    display: function() {
        if (work.jobs.length > 0) {
            $("#workExperience").append(HTMLworkStart);

            for (var i = 0; i < work.jobs.length; i++) {
                var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
                var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
                var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
                var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);

                $(".work-entry:last").append(formattedEmployer, formattedWorkLocation, formattedWorkDates, formattedWorkDescription);
            }
        }
    }
};

var projects = {
    "projects": [
        {
            "title": "Frogger Clone",
            "dates": "April 2016",
            "description": "A reskinned frogger clone created in javascript",
            "images": ["https://upload.wikimedia.org/wikipedia/en/thumb/c/cd/Frogger_game_arcade.png/220px-Frogger_game_arcade.png"],
            "url": "https://github.com/Chandler9Wilson"
        },
        {
            "title": "Neighborhood Map",
            "dates": "May 2016",
            "description": "A map of downtown Austin, with addtional functionality added",
            "images": ["https://upload.wikimedia.org/wikipedia/en/thumb/c/cd/Frogger_game_arcade.png/220px-Frogger_game_arcade.png"],
            "url": "https://github.com/Chandler9Wilson"
        },
        {
            "title": "Health Tracker",
            "dates": "June 2016",
            "description": "A single page app, that tracks a user's calorie intake along with several other health metrics",
            "images": ["https://upload.wikimedia.org/wikipedia/en/thumb/c/cd/Frogger_game_arcade.png/220px-Frogger_game_arcade.png"],
            "url": "https://github.com/Chandler9Wilson"
        },
        {
            "title": "Feed Reader Testing",
            "dates": "June 2016",
            "description": "A project to learn and better understand testing in javascript",
            "images": ["https://upload.wikimedia.org/wikipedia/en/thumb/c/cd/Frogger_game_arcade.png/220px-Frogger_game_arcade.png"],
            "url": "https://github.com/Chandler9Wilson"
        },
        {
            "title": "IoT Home Temperature",
            "dates": "July 2016",
            "description": "A project to accept multiple arduino based temperature sensors and feed them into a central web server, on the MEAN stack",
            "images": ["https://upload.wikimedia.org/wikipedia/en/thumb/c/cd/Frogger_game_arcade.png/220px-Frogger_game_arcade.png"],
            "url": "https://github.com/Chandler9Wilson"
        }
    ],
    display: function() {
        if (projects.projects.length > 0) {
            for (var i = 0; i < projects.projects.length; i++) {
                $("#projects").append(HTMLprojectStart);

                var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title).replace("#", projects.projects[i].url);
                var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
                var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);

                $(".project-entry:last").append(formattedProjectTitle, formattedProjectDates, formattedProjectDescription);
            }
            //timeline template from https://codyhouse.co/gem/vertical-timeline/
            for (var i = 0; i < projects.projects.length; i++) {
                $(".cd-container").append(HTMLtimelineStart);

                var formattedTimelineTitle = HTMLtimelineTitle.replace("%data%", projects.projects[i].title);
                var formattedTimelineDescription = HTMLtimelineDescription.replace("%data%", projects.projects[i].description);
                var formattedTimelineMore = HTMLtimelineMore.replace("#", projects.projects[i].url);
                var formattedTimelineDate = HTMLtimelineDate.replace("%data%", projects.projects[i].dates);

                $(".cd-timeline-content:last").append(formattedTimelineTitle, formattedTimelineDescription, formattedTimelineMore, formattedTimelineDate);
            }

            $(window).on('scroll', function() {
                $(".cd-timeline-block").each(function() {
                    if ($(this).offset().top <= $(window).scrollTop() + $(window).height() * 0.75 && $(this).find('.cd-timeline-img').hasClass('is-hidden')) {
                        $(this).find('.cd-timeline-img, .cd-timeline-content').removeClass('is-hidden').addClass('animated bounce');
                    }
                });
            });
        }
    }
};

$("#mapDiv").append(googleMap);

bio.display();
education.display();
work.display();
projects.display();


