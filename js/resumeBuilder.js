var name = "Kyle Mahre";
var role = "Web developer";

var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedName);
$("#header").append(formattedRole);

var work = {
	"jobs" : [
		{
			"employer" : "STARBUCKS",
			"title" : "BARISTA",
			"location": ["KENNESAW", "GEORGIA"],
			"dates" : "2011- PRESENT",
			"description": "Customer service, preparing drinks, cash management, sharing knowledge of products, merchandise sales and service, cleaning; anticipation, connection, and personalization of customer needs."
		},
		{
			"employer" : "KING & YAKLIN, LLP.",
			"title" : "FILE CLERK",
			"location": ["MARIETTA", "GEORGIA"],
			"dates": "JAN 2013-APR 2013",
			"description": "Closing Files; Distinguishing whether closed file documents should be kept, stored electronically, or destroyed; making runs to court and judges chambers; Sorting correspondence; organizing files and file rooms."
		},
		{
			"employer": "US NAVY",
			"title": "ENLSITED SAILOR",
			"location": ["USS BARRY DDG-52", "NORFOLK, VIRGINIA"],
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

var bio = {
	"biopic" : "images/kfm.jpg",
	"name" : "Kyle Mahre",
	"role" : "Web developer",
	"welcomeMessage" : "Welcome!",
	"contacts" : [{"email": "kfmahre@gmail.com"}, {"mobile": "404.610.6162"}],
	"skills" : ["programming", "html", "css", "JS"]
};

var education = {
	"schools" : [
		{
			"name" : "Kennesaw State University",
			"location" : ["Kennesaw", "Georgia"],
			"degree" : "BS",
			"majors" : ["PoliSci", "Legal Studies"],
			"dates": "2007-2010"
		}
	],
	"onlineCourses" : [
		{
			"name": "Udacity",
			"degree": "Nanodegree",
			"course": "Front-end developer",
			"url": "https://www.udacity.com/"
		}
	]
};

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

