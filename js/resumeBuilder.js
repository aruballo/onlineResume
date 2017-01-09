//Namespace
var resumeBuilder = resumeBuilder || {};

//Primary Resume Objects

resumeBuilder.bio = {
    'name': 'Antonio Ruballos',
    'role': 'Web Developer',
    'biopic': 'images/ProfilePic.jpg',
    'contacts': {
        'email': 'ant.ruballos@gmail.com',
        'mobile': '626-399-9212',
        'github': 'https://github.com/aruballo',
        'location': 'Irvine, CA',
        'location2': 'Pasadena,CA'
    },
    'welcomeMessage': 'Hello!',
    'skills': ['Javascript', 'HTML5', 'CSS3']
};

resumeBuilder.work = {
    'jobs': [{
        'title': 'Product Support/Software Development',
        'employer': 'Profound Logic Software',
        'dates': 'June 2012 - Present',
        'location': 'Irvine, CA',
        'description': 
            '<ul class="work-Experience-List"> ' + 
            '<li>Recreate and resolve customer issues with large front-end JavaScript framework across all major browsers, with a range of 3–10 issues per day </li> ' +
            '<li>Assisting in migration of newly developed company web site, and creating in-house Content Management System program for the 3 person marketing team </li> ' + 
            '<li>Extending Ext.js based in-house CRM system with multiple features, such as tables listing potential customer opportunities and revenue statistics for hundreds of customers </li> ' +
            '<li>Engage in services projects for customers, such as creating static HTML pages, publishing mobile applications, setting up SSL on Apache servers, and more </li> ' +
            '</ul>'
    }]
};

resumeBuilder.education = {
    'schools': [{
        'name': 'University of California, Irvine',
        'dates': 2012,
        'location': 'Irvine, CA',
        'majors': ['Computer Science and Engineering'],
        'degree': 'Bachelors of Science',
        'url' : 'http://www.uci.edu'
    }, ],
    'onlineCourses': [{
        'title': 'Front End Developer NanoDegree',
        'school': 'Udacity',
        'date': 2016,
        'url': 'https://www.udacity.com'
    }]
};

resumeBuilder.projects = {
    'projects': [{
        'title': 'Neighborhood Map',
        'dates': 'August 2016',
        'description': 'Single page application built using Knockout.js and hosted on GitHub pages. A full page Google map that displays locations using the Yelp API.' +
        'Users can filter locations shown based on Yelp Categories and distance from current location. ' +
        'Users can also type into a search bar to search for locations',
        'images': ['images/NeighborhoodApp.PNG'],
        'url': '"http://aruballo.github.io/neighborhoodapp/"'
    },
    {
        'title': 'Arcade Game',
        'dates': 'July 2016',
        'description': 'Browser game based on the classic game Frogger, created with Javascript, HTML5 and CSS3. Developed with native Javascript code using the canvas API offered in HTML5 for use across all major browsers.',
        'images': ['images/RadioActiveBugs.jpg'],
        'url': '"https://aruballo.github.io/Arcade-Game/"'
    }]
};

//Resume HTML generation functions

resumeBuilder.bio.display = function() {

    $('#header').prepend(HTMLheaderRole.replace('%data%', resumeBuilder.bio.role))
        .prepend(HTMLheaderName.replace('%data%', resumeBuilder.bio.name))
        .append(HTMLbioPic.replace('%data%', resumeBuilder.bio.biopic));
    $('#topContacts').prepend(HTMLemail.replace('%data%', resumeBuilder.bio.contacts.email))
        .prepend(HTMLmobile.replace('%data%', resumeBuilder.bio.contacts.mobile))
        .prepend(HTMLgithub.replace('%data%', resumeBuilder.bio.contacts.github))
        .prepend(HTMLlocation.replace('%data%', resumeBuilder.bio.contacts.location));
    $("#footerContacts").append(HTMLcontactGeneric.replace('%data%', resumeBuilder.bio.contacts.email).replace('%contact%', 'Antonio Ruballos'));

    var skillsLength = resumeBuilder.bio.skills.length;

    if (skillsLength > 0) {

        $('#header').append(HTMLskillsStart);

        for (var i = 0; i < skillsLength; i++) {
            $('#skills').append(HTMLskills.replace('%data%', resumeBuilder.bio.skills[i]));
        }

    }
};

resumeBuilder.work.display = function() {

    var workLength = resumeBuilder.work.jobs.length;

    if (workLength > 0) {

        for (var i = 0; i < workLength; i++) {
            $('#workExperience').append(HTMLworkStart);

            var formattedEmployerAndTitle = HTMLworkEmployer.replace('%data%', resumeBuilder.work.jobs[i].employer);
            formattedEmployerAndTitle = formattedEmployerAndTitle + HTMLworkTitle.replace('%data%', resumeBuilder.work.jobs[i].title);
            $('.work-entry:last').append(formattedEmployerAndTitle)
                .append(HTMLworkDates.replace('%data%', resumeBuilder.work.jobs[i].dates))
                .append(HTMLworkLocation.replace('%data%', resumeBuilder.work.jobs[i].location))
                .append(HTMLworkDescription.replace('%data%', resumeBuilder.work.jobs[i].description));
        }
    }

};

resumeBuilder.projects.display = function() {

    var projectsLength = resumeBuilder.projects.projects.length;

    if (projectsLength > 0) {
        for (var i = 0; i < projectsLength; i++) {
            //$('#projects').append(HTMLprojectImage.replace('%data%', resumeBuilder.projects.projects[i].images[0]));
            $('#projects').append(HTMLprojectStart);
            var projectTitle = HTMLprojectTitle.replace('%data%', resumeBuilder.projects.projects[i].title);
            $('.project-entry:last').append(HTMLprojectImage.replace('%data%', resumeBuilder.projects.projects[i].images[0]))
                .append(projectTitle.replace('%URL%', resumeBuilder.projects.projects[i].url))
                .append(HTMLprojectDates.replace('%data%', resumeBuilder.projects.projects[i].dates))
                .append(HTMLprojectDescription.replace('%data%', resumeBuilder.projects.projects[i].description));
        }
    }
};

resumeBuilder.education.display = function() {

    var educationLength = resumeBuilder.education.schools.length;

    if (educationLength > 0) {
        for (var i = 0; i < educationLength; i++) {
            $('#education').append(HTMLschoolStart);
            $('.education-entry:last').append(HTMLschoolName.replace('%data%', resumeBuilder.education.schools[i].name))
                .append(HTMLschoolDates.replace('%data%', resumeBuilder.education.schools[i].dates))
                .append(HTMLschoolLocation.replace('%data%', resumeBuilder.education.schools[i].location))
                .append(HTMLschoolDegree.replace('%data%', resumeBuilder.education.schools[i].degree))
                .append(HTMLschoolMajor.replace('%data%', resumeBuilder.education.schools[i].majors[0]));

        }
    }

    var onlineCoursesLength = resumeBuilder.education.onlineCourses.length;

    if (onlineCoursesLength > 0) {
        $('#education').append(HTMLonlineClasses);
        for (var i = 0; i < onlineCoursesLength; i++) {
            $('#education').append(HTMLonlineStart);
            $('.onlineCourses-entry:last').append(HTMLonlineSchool.replace('%data%', resumeBuilder.education.onlineCourses[i].school))
                .append(HTMLonlineDates.replace('%data%', resumeBuilder.education.onlineCourses[i].date))
                .append(HTMLonlineTitle.replace('%data%', resumeBuilder.education.onlineCourses[i].title))
                .append(HTMLonlineURL.replace('%data%', resumeBuilder.education.onlineCourses[i].url));
        }
    }
};

resumeBuilder.displayMap = function() {
    $('#mapDiv').append(googleMap);
};