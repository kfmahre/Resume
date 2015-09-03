var bio = {
	"bioPic" : ["images/kfm.jpg"],
	"name" : "Kyle Mahre",
	"role" : "Web developer",
	"welcomeMessage" : "Thanks for checking out my resume!",
	"contacts" : [{"email": "kfmahre@gmail.com"}, {"mobile": "404.610.6162"}],
	"skills" : ["html5", "css3", "JavaScript", "Git"]
};

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
			"title": "Intro to HTML and CSS",
			"school": "Udacity",
			"date": "July-Aug 2015",
			"url": "https://www.udacity.com/"
		}
	]
};

var work = {
	"jobs" : [
		{
			"employer" : "STARBUCKS",
			"title" : "BARISTA",
			"location": "Kennesaw, GA",
			"dates" : "2011- PRESENT",
			"description": "Customer service, preparing drinks, cash management, sharing knowledge of products, merchandise sales and service, cleaning; anticipation, connection, and personalization of customer needs."
		},
		{
			"employer" : "KING & YAKLIN, LLP.",
			"title" : "FILE CLERK",
			"location": "Marietta, GA",
			"dates": "JAN 2013-APR 2013",
			"description": "Closing Files; Distinguishing whether closed file documents should be kept, stored electronically, or destroyed; making runs to court and judges chambers; Sorting correspondence; organizing files and file rooms."
		},
		{
			"employer": "US NAVY",
			"title": "ENLSITED SAILOR",
			"location": "Norfolk, VA",
			"dates": "2004-2007",
			"description": "Operating gas turbine generators and switchboards. Responsibilities included: updating equipment logs, performing preventative maintenance on power plant equipment, giving and receiving on the job training and presentations, and safety tagging electrical equipment."
		}
	]
};

var projects = {
	"projects" : [
		{
			"title" : "Placeholder",
			"dates" : "2015",
			"description" : "there will be a project here",
			"images": ["http://placehold.it/350x150"]
		},
		{
			"title" : "Placeholder2",
			"dates" : "2015",
			"description" : "there will be another project here",
			"images" : ["http://placehold.it/350x150"]
		}
	]
};

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
$("#header").prepend(formattedBioPic);
$("#header").prepend(formattedName);
$("#header").append(formattedRole);

if (bio.skills.length > 0) {

	$("#header").append(HTMLskillsStart);

	var formattedSkills = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkills);
	var formattedSkills = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedSkills);
	var formattedSkills = HTMLskills.replace("%data%", bio.skills[2]);
	$("#skills").append(formattedSkills);
	var formattedSkills = HTMLskills.replace("%data%", bio.skills[3]);
	$("#skills").append(formattedSkills);
};

function displayWork() {
	for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);


		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);


		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		$(".work-entry:last").append(formattedLocation);


		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);
	}
};

displayWork();

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
};

$("#main").append(internationalizeButton);

projects.display = function() {
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);

		if (projects.projects[project].images.length > 0) {
			for (image in projects.projects[project].images) {
			var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
			$(".project-entry:last").append(formattedImage);
			}
		}
	}
};

projects.display();

education.display = function() {
	for (school in education.schools) {
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
};

education.display();

$("#mapDiv").append(googleMap);