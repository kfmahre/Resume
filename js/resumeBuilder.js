var name = "Kyle Mahre";
var role = "Web developer";

var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedName);
$("#header").append(formattedRole);

var work = {
	"jobs" : [
		{
			"title" : "BARISTA",
			"employer" : "STARBUCKS",
			"location": ["KENNESAW", "GEORGIA"],
			"dates" : "2011- PRESENT",
			"description": "Customer service, preparing drinks, cash management, sharing knowledge of products, merchandise sales and service, cleaning; anticipation, connection, and personalization of customer needs."
		},
		{
			"title" : "FILE CLERK",
			"employer" : "KING & YAKLIN, LLP.",
			"location": ["MARIETTA", "GEORGIA"],
			"dates": "JAN 2013-APR 2013",
			"description": "Closing Files; Distinguishing whether closed file documents should be kept, stored electronically, or destroyed; making runs to court and judges chambers; Sorting correspondence; organizing files and file rooms."
		},
		{
			"title": "ENLSITED SAILOR",
			"employer": "US NAVY",
			"location": ["USS BARRY DDG-52", "NORFOLK, VIRGINIA"],
			"dates": "2004-2007",
			"description": "Operating gas turbine generators and switchboards. Responsibilities included: updating equipment logs, performing preventative maintenance on power plant equipment, giving and receiving on the job training and presentations, and safety tagging electrical equipment."
		}
	]
};

var projects = {
	"projects" : [
		{
			"title": "",
			"dates": "",
			"description": "",
			"images": []
		}
	]
};

var bio = {
	"picture" : "images/kfm.jpg",
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
			"location": ["Kennesaw", "Georgia"],
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