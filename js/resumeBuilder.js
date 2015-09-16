'use strict';
var bio = {
	"bioPic" : ["images/kfm.jpg"],
	"name" : "Kyle Mahre",
	"role" : "Web developer",
	"welcomeMessage" : "Thanks for checking out my resume!",
	"contacts" : {
		"email": "kfmahre@gmail.com",
		"mobile": "404.555.6162",
		"github": "https://github.com/kfmahre"
	},
	"skills" : ["HTML5", "CSS3", "JavaScript", "Git", "Github"]
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
			"description": "Customer service, preparing drinks, cash management, sharing knowledge of products, merchandise sales and service, cleaning; anticipation, connection, and personalization of customer needs."
		},
		{
			"employer" : "KING & YAKLIN, LLP.",
			"url" : "http://www.kingyaklin.com/",
			"title" : "FILE CLERK",
			"location": "Marietta, GA",
			"dates": "JAN 2013-APR 2013",
			"description": "Closing Files; Distinguishing whether closed file documents should be kept, stored electronically, or destroyed; making runs to court and judges chambers; Sorting correspondence; organizing files and file rooms."
		},
		{
			"employer": "US NAVY",
			"url" : "https://en.wikipedia.org/wiki/USS_Barry_(DDG-52)",
			"title": "ENLSITED SAILOR",
			"location": "Norfolk, VA",
			"dates": "2004-2007",
			"description": "Served onboard the USS Barry(DDG-52). Duties included operating gas turbine generators and switchboards. Responsibilities included: updating equipment logs, performing preventative maintenance on power plant equipment, giving and receiving on the job training and presentations, and safety tagging electrical equipment."
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
			"url" : "https://kfmahre.github.io/index.html"
		},
		{
			"title" : "Placeholder2",
			"dates" : "2015",
			"description" : "there will be another project here",
			"images" : ["http://placehold.it/350x150"],
			"url" : ""
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