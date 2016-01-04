'use strict';
var bio = {
	"bioPic" : ["images/old500X.jpg"],
	"name" : "Kyle Mahre",
	"role" : "Web developer",
	"welcomeMessage" : "Welcome to my resume webpage",
	"contacts" : {
		"email": "kfmahre@gmail.com",
		"mobile": "404.610.6162",
		"github": "https://github.com/kfmahre"
	},
	"skills" : ["HTML5", "CSS3", "JavaScript", "Git", "Github", "Gulp"]
	// TODO: Add more skills as learned
};

bio.display = function() {
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	$("#header").prepend(formattedRole);

	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	$("#header").prepend(formattedName);

	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	var formattedContactsAll = formattedEmail + formattedMobile + formattedGithub;
	$("#topContacts, #footerContacts").append(formattedContactsAll);

	var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
	$("#header").append(formattedBioPic);

	var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
	$("#header").append(formattedWelcomeMessage);

	$("#header").append(HTMLskillsStart);

	for (var i = 0; i < bio.skills.length; i++) {
		console.log(bio.skills[i]);
		var formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);
		$("#skills").append(formattedSkills);
	}

};

bio.display();

var work = {
	"jobs" : [
		{
			"employer" : "STARBUCKS",
			"url" : "http://www.starbucks.com/store/17309/us/chastain-busbee/745-chastain-rd-kennesaw-ga-301443000",
			"title" : "BARISTA",
			"location": "Kennesaw, GA",
			"dates" : "2011- PRESENT",
			"description": "Works as part of a team to keep the busiest store in the district running smoothly. Improvises and communicates with my coworkers in a dynamic environment. Requires focus, flexibility, manners, and cool-headedness."
		},
		{
			"employer" : "KING & YAKLIN, LLP.",
			"url" : "http://www.kingyaklin.com/",
			"title" : "FILE CLERK",
			"location": "Marietta, GA",
			"dates": "JAN 2013-APR 2013",
			"description": "Filed documents in court and judge’s chambers. Reorganized current and closed files, moved many to electronic storage for safe-keeping."
		},
		{
			"employer": "US NAVY",
			"url" : "https://en.wikipedia.org/wiki/USS_Barry_(DDG-52)",
			"title": "ENLSITED SAILOR",
			"location": "Norfolk, VA",
			"dates": "2004-2007",
			"description": "Served as a maintenance technician aboard the guided missile destroyer, USS Barry. Primary focus on maintaining gas-turbine generators and switchboards. Also trained on computer networking, telecommunications, fire-fighting, and damage-control."
		}
	]
};

work.display = function() {
	for (var i = 0; i < work.jobs.length; i++) {
		console.log(work.jobs[i]);
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer).replace("#", work.jobs[i].url);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);


		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
		$(".work-entry:last").append(formattedDates);


		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
		$(".work-entry:last").append(formattedLocation);


		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
		$(".work-entry:last").append(formattedDescription);
	}
};

work.display();

// TODO: Add in projects as they are completed
var projects = {
	"projects" : [
		{
			"title" : "Portfolio",
			"dates" : "2015",
			"description" : "This is a resposively designed portfolio of all the projects I've currently comepleted.",
			"images": ["images/foliopic1.png", "images/foliopic2.png"],
			"url" : "http://kfmahre.github.io/Portfolio/"
		},
		{
			"title" : "Classic Arcade Game Clone",
			"dates" : "September-October 2015 & continued",
			"description" : "Developing this classic arcade game clone enhanced my skills in object-oriented JavaScript and expanded my understanding of HTML canvas.",
			"images" : ["images/aGame1.png","images/aGame2.png"],
			"url" : "https://github.com/kfmahre/arcade-game"
		}
	]
};

projects.display = function() {
		for (var project in projects.projects) {
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title).replace("#",projects.projects[project].url);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);

		if (projects.projects[project].images.length > 0) {
			for (var image in projects.projects[project].images) {
			var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
			$(".project-entry:last").append(formattedImage);
			}
		}
	}
};

projects.display();

// TODO: add in seperate online courses from Udacity nanodegree seperately
var education = {
	"schools" : [
		{
			"name" : "Kennesaw State University",
			"location" : "Kennesaw, GA",
			"degree" : "Bachelor of Science",
			"majors" : "Political Science",
			"dates": "2010",
			"url": "http://www.kennesaw.edu/"
		}
	],
	"onlineCourses" : [
		{
			"title": "Front-End Web Developer Nanodegree",
			"school": "Udacity",
			"date": "2015",
			"url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
		}
	]
};

education.display = function() {
	for (var school in education.schools) {
		$("#education").append(HTMLschoolStart);

		var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name).replace("#", education.schools[school].url);

		var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);

		var formattedNameDegree = formattedName + formattedDegree;
		$(".education-entry:last").prepend(formattedNameDegree);

		var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		$(".education-entry:last").append(formattedDates);

		var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		$(".education-entry:last").prepend(formattedLocation);

		var formattedMajors = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
		$(".education-entry:last").append(formattedMajors);

	}


	for (var onlineCourse in education.schools) {

		$("#education").append(HTMLonlineClasses);
		$("#education").append(HTMLschoolStart);

		var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourse].title).replace("#", education.onlineCourses[onlineCourse].url);

		var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourse].school);

		var formattedTitleSchool = formattedTitle + formattedSchool;
		$(".education-entry:last").append(formattedTitleSchool);

		var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[onlineCourse].date);
		$(".education-entry:last").append(formattedDates);

		var formattedUrl = HTMLonlineURL.replace("#", education.onlineCourses[onlineCourse].url).replace("%data%", education.onlineCourses[onlineCourse].url);
		$(".education-entry:last").append(formattedUrl);

	}

};

education.display();

$(document).click(function(loc) {

var x = loc.pageX;
var y = loc.pageY;

	logClicks(x,y);
});

function inName(name) {
	name = bio.name.trim().split(" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

	return name[0] +" "+name[1];
}

$("#main").append(internationalizeButton);

$("#mapDiv").append(googleMap);