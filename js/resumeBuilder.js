//Namespace
var resumeBuilder = resumeBuilder || {};

//Primary Resume Objects

resumeBuilder.bio = {
    'name': 'Antonio Ruballos',
    'role': 'Web Developer',
    'biopic': 'images/Icon.png',
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
        'description': 'Worked with a range of IBM i technologies such as RPGIV, DDS, and CL as well as front end technlogies such HTML5, JS, and CSS. Initially did' +
            ' customer and product support but through my own initiative took on other tasks such as web site migration, mobile development and customer service projects.'
    }]
};

resumeBuilder.education = {
    'schools': [{
        'name': 'University of California, Irvine',
        'dates': 2012,
        'location': 'Irvine, CA',
        'majors': ['CompSci & Eng'],
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
        'title': 'Project Placeholder',
        'dates': 'November 2015',
        'description': 'Project Description',
        'images': ['images/project1.jpg']
    }]
};

//Resume HTML generation functions

resumeBuilder.bio.display = function() {

    $('#header').prepend(HTMLheaderRole.replace('%data%', resumeBuilder.bio.role))
        .prepend(HTMLheaderName.replace('%data%', resumeBuilder.bio.name))
        .append(HTMLbioPic.replace('%data%', resumeBuilder.bio.biopic))
        .append(HTMLWelcomeMsg.replace('%data%', resumeBuilder.bio.welcomeMessage));
    $('#topContacts').prepend(HTMLemail.replace('%data%', resumeBuilder.bio.contacts.email))
        .prepend(HTMLmobile.replace('%data%', resumeBuilder.bio.contacts.mobile))
        .prepend(HTMLgithub.replace('%data%', resumeBuilder.bio.contacts.github))
        .prepend(HTMLlocation.replace('%data%', resumeBuilder.bio.contacts.location));
    $("#footerContacts").append(HTMLcontactGeneric.replace('%data%', resumeBuilder.bio.contacts.mobile).replace('%contact%', 'Antonio Ruballos'));

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
            $('#projects').append(HTMLprojectStart);
            $('.project-entry:last').append(HTMLprojectTitle.replace('%data%', resumeBuilder.projects.projects[i].title))
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
                .append(HTMLschoolDegree.replace('%data%', resumeBuilder.education.schools[i].degree))
                .append(HTMLschoolDates.replace('%data%', resumeBuilder.education.schools[i].dates))
                .append(HTMLschoolLocation.replace('%data%', resumeBuilder.education.schools[i].location))
                .append(HTMLschoolMajor.replace('%data%', resumeBuilder.education.schools[i].majors[0]));

        }
    }

    var onlineCoursesLength = resumeBuilder.education.onlineCourses.length;

    if (onlineCoursesLength > 0) {
        $('#education').append(HTMLonlineClasses);
        for (var i = 0; i < onlineCoursesLength; i++) {
            $('#education').append(HTMLonlineStart);
            $('.onlineCourses-entry:last').append(HTMLonlineSchool.replace('%data%', resumeBuilder.education.onlineCourses[i].school))
                .append(HTMLonlineTitle.replace('%data%', resumeBuilder.education.onlineCourses[i].title))
                .append(HTMLonlineDates.replace('%data%', resumeBuilder.education.onlineCourses[i].date))
                .append(HTMLonlineURL.replace('%data%', resumeBuilder.education.onlineCourses[i].url));
        }
    }
};

resumeBuilder.displayMap = function() {
    $('#mapDiv').append(googleMap);
};