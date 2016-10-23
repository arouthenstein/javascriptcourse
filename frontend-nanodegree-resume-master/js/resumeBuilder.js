
//header
//resume name
var name = "Allie Routhenstein";
var formattedName = HTMLheaderName.replace("%data%",name);

//resume role
var role = "Technical Consultant";
var formattedRole = HTMLheaderRole.replace("%data%",role);

//contact info
var mobile = "215.567.9627";
var formattedContactMobile = HTMLmobile.replace("%data%",mobile);

var email = "arouthenstein@gmail.com";
var formattedContactEmail = HTMLemail.replace("%data%",email);

var pic = "images/fry.jpg";
var formattedBioPic = HTMLbioPic.replace("%data%",pic);

var welcomemsg = "I built dis, yo.";
var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%",welcomemsg);

var skills = ["awesomeness", "amazingness", "whatup"];
var formattedSkills = HTMLskills.replace("%data%",skills);


var work = {
    "jobs": [
        {
            "employer" : "Confirmit",
            "title" : "Technical Consultant",
            "location" : "New York City",
            "dates" : "2015-current",
            "description" : "Manage technical implemenations"
        },
        {
            "employer" : "NBME",
            "title" : "MA2",
            "location" : "Philadelphia",
            "dates" : "2013-2015",
            "description" : "Manage MSS"
        }
    ]
}

var projects = {
    "projects": [
        {
            "title" : "Project 1",
            "dates" : "2016",
            "description" : "This IS the project",
            "images" : ["images/fry.jpg"]
        },
        {
            "title" : "Project 2",
            "dates" : "2016",
            "description" : "This IS still the project",
            "images" : ["images/fry.jpg"]
        }
    ]
}

var bio = {
    "name" : "Allie Routhenstein",
    "role" : "Technical Consultant",
    "welcomemsg" : "I built dis, yo",
    "biopic" : "images/fry.jpg",
    "contacts": {
        "mobile" : "215.567.9627",
        "email" : "arouthenstein@gmail.com",
        "github" : "alliebear2143",
        "location" : "Philadelphia",
    },
    "skills" : ["awesomeness", "amazingness", "whatup"]
}
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").prepend(bio.pic);
//$("#topContacts").prepend(bio.skills);
$("#topContacts").prepend(bio.welcomemsg);
$("#topContacts").prepend(bio.contacts.mobile);
$("#topContacts").prepend(bio.contacts.email);

var education = {
    "schools": [
        {
            "name" : "Temple University",
            "location" : "Philadelphia",
            "degreedates" : "2008-2011",
            "url" : "www.temple.edu",
            "major" : ["Sociology"]
        }
    ],
    "onlineCourses": [
        {
            "title" : "Intro to HTML/CSS",
            "school" : "Udacity",
            "dates" : "2016",
            "url" : "www.google.edu"
        }
    ]
}


if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
    }

for (i = 0; i < bio.skills.length; i++) {
    formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
    $("#skills").append(formattedSkill);
}

/*for (job in work.jobs) {
    $("#workExperience").append(HTMLworkStart);
    formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    $(".work-entry:last").append(formattedEmployer + formattedTitle);
    console.log(job);
}*/

for (item in work.jobs) {
    $("#workExperience").append(HTMLworkStart);
    formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[item].employer);
    formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[item].title);
    formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[item].location);
    formattedDates = HTMLworkDates.replace("%data%", work.jobs[item].dates);
    formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[item].description);
    $(".work-entry:last").append(formattedEmployer + formattedTitle);
    $(".work-entry:last").append(formattedLocation);
    $(".work-entry:last").append(formattedDates);
    $(".work-entry:last").append(formattedDescription);
    console.log(item);
}

$("#main").append(internationalizeButton);

function inName() {
    var name = document.getElementById('name');
    console.log(name);
    name.split(" ");
    console.log(n);
    //$("#header").prepend(formattedName);
}