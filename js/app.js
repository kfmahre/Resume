'use strict';

/* -----------------------------------------------------------------------------
I've developed this project from where I finished Udacity's resume builder
project. I'm making the project into a user-friendly interactive webpage resume
builder for those without any web development knowledge. I plan to make it
possible for a user to take their resume and simply paste text into forms that
will create an online resume that they can use on their own personal websites.

Kyle Mahre
------------------------------------------------------------------------------*/


/*
These are HTML strings.
*/
var HTMLheaderName = '<h1 id="name">%data%</h1>';
var HTMLheaderRole = '<span class="orange-text">%data%</span>';

var HTMLcontactGeneric = '<li class="flex-item"><span class="orange-text">%contact%</span><span class="white-text">%data%</span></li>';
var HTMLmobile = '<li class="flex-item"><span class="orange-text">mobile</span><span class="white-text">%data%</span></li>';
var HTMLemail = '<li class="flex-item"><span class="orange-text">email</span><span class="white-text">%data%</span></li>';
var HTMLtwitter = '<li class="flex-item"><span class="orange-text">twitter</span><span class="white-text">%data%</span></li>';
var HTMLgithub = '<li class="flex-item"><span class="orange-text">github</span><span class="white-text">%data%</span></li>';
var HTMLblog = '<li class="flex-item"><span class="orange-text">blog</span><span class="white-text">%data%</span></li>';
var HTMLlocation = '<li class="flex-item"><span class="orange-text">location</span><span class="white-text">%data%</span></li>';

var HTMLbioPic = '<img src="%data%" class="biopic">';
var HTMLwelcomeMsg = '<span class="welcome-message">%data%</span>';

var HTMLskillsStart = '<h3 id="skills-h3">Skills at a Glance:</h3><ul id="skills" class="flex-box"></ul>';
var HTMLskills = '<li class="flex-item"><span class="white-text">%data%</span></li>';

var HTMLworkStart = '<div class="work-entry center-content"></div>';
var HTMLworkEmployer = '<a href="#">%data%';
var HTMLworkTitle = ' - %data%</a>';
var HTMLworkDates = '<div class="date-text">%data%</div>';
var HTMLworkLocation = '<div class="location-text">%data%</div>';
var HTMLworkDescription = '<p class="white-text"><br>%data%</p>';

var HTMLprojectStart = '<div class="project-entry carousel-item"></div>';
var HTMLprojectTitle = '<a href="#" class="carousel-caption d-none d-md-block>%data%</a>';
var HTMLprojectDates = '<div class="date-text carousel-caption">%data%</div>';
var HTMLprojectDescription = '<p class="white-text carousel-caption"><br>%data%</p>';
var HTMLprojectImage = '<img class="d-block w-100 img-fluid" src="%data%">';

var HTMLschoolStart = '<div class="education-entry center-content"></div>';
var HTMLschoolName = '<a href="#">%data%';
var HTMLschoolDegree = ' -- %data%</a>';
var HTMLschoolDates = '<div class="date-text">%data%</div>';
var HTMLschoolLocation = '<div class="location-text">%data%</div>';
var HTMLschoolMajor = '<em><br>Major: %data%</em>';

var HTMLonlineClasses = '<h2 class="onlineClasses">Online Classes</h2>';
var HTMLonlineTitle = '<a href="#">%data%';
var HTMLonlineSchool = ' - %data%</a>';
var HTMLonlineDates = '<div class="date-text">%data%</div>';
var HTMLonlineURL = '<br><a href="#">%data%</a>';

var internationalizeButton = '<button>Internationalize</button>';
var googleMap = '<div id="map"></div>';

var map;    // declares a global map variable

/*
Start here! initializeMap() is called when page is loaded.
*/
function initializeMap() {

  var locations; // declares locations for use within initializeMap

  var mapOptions = {
    styles: styleArray,
    disableDefaultUI: true
  };

  /* For the map to be displayed, the googleMap var must be
  appended to #mapDiv in resumeBuilder.js.
  */
  map = new google.maps.Map(document.getElementById('map'), mapOptions);

  /* locationFinder() returns an array of every location string from the JSONs -
  written for bio, education, and work. ------------------------------------- */

  function locationFinder() {
    // initializes an empty array
    var locations = [];
    //if uncommented, adds the location property from bio to the locations array
    //locations.push(bio.contacts.location);

    // iterates through school locations and appends each location to
    // the locations array
    for (var school in education.schools) {
      locations.push(education.schools[school].location);
    }
    // iterates through work locations and appends each location to
    // the locations array
    for (var job in work.jobs) {
      locations.push(work.jobs[job].location);
    }
    return locations;
  }

  /* createMapMarker(placeData) reads Google Places search results to create map
  pins. placeData is the object returned from search results containing information
  about a single location. -------------------------------------------------- */
  function createMapMarker(placeData) {

    // The next lines save location data from the search result object to local variables
    var lat = placeData.geometry.location.lat();  // latitude from the place service
    var lon = placeData.geometry.location.lng();  // longitude from the place service
    var name = placeData.formatted_address;   // name of the place from the place service
    var bounds = window.mapBounds;            // current boundaries of the map window

    // marker is an object with additional data about the pin for a single location
    var marker = new google.maps.Marker({
      map: map,
      position: placeData.geometry.location,
      title: name
    });

    // infoWindows are the little helper windows that open when you click
    // or hover over a pin on a map. They usually contain more information
    // about a location.
    var infoWindow = new google.maps.InfoWindow({
      content: name
    });

    // hmmmm, I wonder what this is about...
    google.maps.event.addListener(marker, 'click', function() {
    infoWindow.open(map, marker);
    });

    // this is where the pin actually gets added to the map.
    // bounds.extend() takes in a map location object
    bounds.extend(new google.maps.LatLng(lat, lon));
    // fit the map to the new marker
    map.fitBounds(bounds);
    // center the map
    map.setCenter(bounds.getCenter());
  }

  /*
  callback(results, status) makes sure the search returned results for a location.
  If so, it creates a new map marker for that location.
  */
  function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      createMapMarker(results[0]);
    }
  }

  /*
  pinPoster(locations) takes in the array of locations created by locationFinder()
  and fires off Google place searches for each location
  */
  function pinPoster(locations) {

    // creates a Google place search service object. PlacesService does the work of
    // actually searching for location data.
    var service = new google.maps.places.PlacesService(map);

    // Iterates through the array of locations, creates a search object for each location
    for (var place in locations) {

      // the search request object
      var request = {
        query: locations[place]
      };

      // Actually searches the Google Maps API for location data and runs the callback
      // function with the search results after each search.
      service.textSearch(request, callback);
    }
  }

  // Sets the boundaries of the map based on pin locations
  window.mapBounds = new google.maps.LatLngBounds();

  // locations is an array of location strings returned from locationFinder()
  locations = locationFinder();

  // pinPoster(locations) creates pins on the map for each location in
  // the locations array
  pinPoster(locations);

}

var bio = {
  "bioPic" : ["images/old500X.jpg"],
  "name" : "Kyle Mahre",
  "role" : "Web developer",
  "welcomeMessage" : "Some stuff I know about:",
  "contacts" : {
    "email": "kfmahre@gmail.com",
    "mobile": "404.610.6162",
    "github": "https://github.com/kfmahre"
  },
  "skills" : ["HTML5", "CSS3", "JavaScript", "SQL", "Python", "jQuery", "Responsive Design", "Angular.js", "Git", "Github", "Gulp"]
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
    var formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);
    $("#skills").append(formattedSkills);
  }

};

bio.display();

var work = {
  "jobs" : [
    {
      "employer" : "Big Peach Running Company",
      "url" : "https://www.bigpeachrunningco.com/locations/marietta/",
      "title" : "Guest Advocate",
      "location": "Marietta, GA",
      "dates" : "June 2017- Present",
      "description": "Advocates for customers to advance their active pedestrian experience"
    },
    {
      "employer" : "Starbucks",
      "url" : "http://www.starbucks.com/store/17309/us/chastain-busbee/745-chastain-rd-kennesaw-ga-301443000",
      "title" : "Barista",
      "location": "Kennesaw, GA",
      "dates" : "2011- 2016",
      "description": "Teamwork and leadership in customer service <br>Sales experience in a fast-paced retail environment"
    },
    {
      "employer" : "KING & YAKLIN, LLP.",
      "url" : "http://www.kingyaklin.com/",
      "title" : "File clerk",
      "location": "Marietta, GA",
      "dates": "JAN 2013-APR 2013",
      "description": "Filed documents at court and judge’s chambers<br>Organized correspondence documents and closed files <br>Electronic document storage"
    },
    {
      "employer": "US NAVY",
      "url" : "https://en.wikipedia.org/wiki/USS_Barry_(DDG-52)",
      "title": "Sailor",
      "location": "Norfolk, VA",
      "dates": "2004-2007",
      "description": "Served as a maintenance technician aboard the guided missile destroyer USS Barry <br>Primary focus on maintaining gas-turbine generators and switchboards <br>Also trained on computer networking, telecommunications, fire-fighting, and damage-control"
    }
  ]
};

work.display = function() {
  for (var i = 0; i < work.jobs.length; i++) {

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
      "images": ["images/foliopic1.png"],
      "url" : "http://kfmahre.github.io/Portfolio/"
    },
    {
      "title" : "Classic Arcade Game Clone",
      "dates" : "September-October 2015",
      "description" : "Developing this classic arcade game clone enhanced my skills in object-oriented JavaScript and expanded my understanding of HTML canvas.",
      "images" : ["images/aGame1.png"],
      "url" : "https://github.com/kfmahre/arcade-game"
    },
    {
      "title" : "Website Performance Optimization",
      "dates" : "November-December 2015",
      "description" : "Udacity made a really badly performing website and tasked students with getting it to standard.",
      "images" : ["images/project4.png"],
      "url" : "https://github.com/kfmahre/udportfolio"
    },
    {
      "title" : "Cat-Clicker Web App",
      "dates" : "January & Febuary 2016",
      "description" : "Fun project that really helped me get the MVO/MVVM concept",
      "images" : ["images/catclicker.png"],
      "url" : "http://kfmahre.github.io/Cat-Clicker/"
    },
    {
      "title" : "Neighborhood Map Project",
      "dates" : "Febuary & March 2016",
      "description" : "Using knockout.js and google maps, I made this project that shows the information on several trailheads in my region. Wunderground API weather data displays in infowindows on the google map. A search field filters the map markers and list of trails.",
      "images" : ["images/project5.png"],
      "url" : "http://kfmahre.github.io/Neighborhood-Map/"
    }
  ]
};

projects.display = function() {
  for (var project in projects.projects) {
    $("#projects").append(HTMLprojectStart);

    if (projects.projects[project].images.length > 0) {
      for (var image in projects.projects[project].images) {
        var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
        $(".project-entry:last").append(formattedImage);
      }
    }

    var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title).replace("#",projects.projects[project].url);
    $(".project-entry:last").append(formattedTitle);

    var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
    $(".project-entry:last").append(formattedDates);

    var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
    $(".project-entry:last").append(formattedDescription);

  }
};

projects.display();

fixCarousel = function() {
  $('.carousel-item:first').addClass('active');
};

fixCarousel();

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

/* ------------ For Collecting Click Locations --------- */
var clickLocations = [];

function logClicks(x,y) {
  clickLocations.push(
    {
      x: x,
      y: y
    }
  );
  console.log('x location: ' + x + '; y location: ' + y);
}

$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;
  logClicks(x,y);
});
/* ----------------------------------------------------- */

/* -------- The International Name challenge for Udacity project ---------- */
$(document).ready(function() {
  $('button').click(function() {
    var iName = inName() || function(){};
    $('#name').html(iName);
  });
});

function inName(name) {
  name = bio.name.trim().split(" ");
  console.log(name);
  name[1] = name[1].toUpperCase();
  name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
  return name[0] +" "+name[1];
}

$("#main").append(internationalizeButton);
/* ------------------------------------------------------------------------ */



/* bootstrap carousel */
$(document).ready(function(){
  $('.carousel').carousel({
  interval: 2000
  })
});
/* ----------------------------------- */

/* Google map and styles ---------------------------------------------------- */
var styleArray = [
      {
      featureType: "all",
      elementType: "geometry",
      stylers: [
      { hue: "#bfff00" },
      { saturation: -80 }
      ]
    },{
      featureType: "road.arterial",
      elementType: "geometry",
      stylers: [
        { hue: "#00ffee" },
        { saturation: 80 }
      ]
    },{
      featureType: "poi.business",
      elementType: "labels",
      stylers: [
        { visibility: "off" }
      ]
    },{
      featureType: 'water',
      elementType: 'geometry',
      stylers: [
        {hue: "#3380cc"},
        {saturation: 80},
        {lightness: 0}
      ]
    }
];

$("#mapDiv").append(googleMap);

// Calls the initializeMap() function when the page loads
window.addEventListener('load', initializeMap);

// Vanilla JS way to listen for resizing of the window
// and adjust map bounds
window.addEventListener('resize', function(e) {
  //Make sure the map bounds get updated on page resize
map.fitBounds(mapBounds);
});