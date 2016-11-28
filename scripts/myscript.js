var loadedResume;
var showingNumber;
window.onload = onload();


function launchModal(project) {
    showingNumber = project;
    $.getJSON("scripts/data.json", function (data) {
        projectNum = "project" + project;
        var items = [];
        $.each(data, function (key, val) {
            if (key == projectNum) {
                var screenshots = "";
                document.getElementById('myModalLabel').innerHTML = val.title;
                document.getElementById('modalContent').innerHTML = val.description;

                document.getElementById('modalScreenshots').innerHTML = "<center><button onclick='showPrevProject()' id='prevButton'><</button><img src='../" + val.image + "' width='75%'><button onclick='showNextProject()' id='nextButton'>></button></center>";
                document.getElementById('modalSubLabel').innerHTML = "Languages used: " + val.languages;
                if (projectNum != "project1") {
                    document.getElementById('github').innerHTML = "<a href='" + val.github + "' target='_blank' class='gitlink'>View on Github</a>";
                } else {
                    document.getElementById('github').innerHTML = "View the project in the App Store";
                }
                document.getElementById('myModal').style.background = val.color;
            }
        });
    });

    $('#myModal').modal('show');

}

function showNextProject() {

    if (showingNumber == 10) {
        document.getElementById('nextButton').disabled = true;
    } else {
        var newNumber = showingNumber + 1;
        launchModal(newNumber);
    }

}

function showPrevProject() {
    if (showingNumber == 1) {
        document.getElementById('prevButton').disabled = true;
    } else {
        var newNumber = showingNumber - 1;
        launchModal(newNumber);
    }
}

function onload() {
    loadedResume = false;
    showingNumber = false;



}

function loadResume() {
    if (loadedResume == false) {
        document.getElementById('onlineResume').innerHTML = "<object width='100%' height='600' data='../portfolio/projects/Kenny_Brendan_NMID.pdf' id='resume' class='animated fadeIn'></object>";
        loadedResume = true;
        document.getElementById('resumeButton').innerHTML = "Hide Resume"
    } else if (loadedResume == true) {
        document.getElementById('onlineResume').innerHTML = "";
        loadedResume = false;
        document.getElementById('resumeButton').innerHTML = "Show Resume"
    }

}

function showNumber() {
    if (showingNumber == false) {
        $('#number').addClass('link');
        $('#number').removeClass('hide');
        $('#number').addClass('animated fadeInRight');
        showingNumber = true;
    } else if (showingNumber == true) {
        $('#number').addClass('hide');
        showingNumber = false;
    }

}


$(document).ready(function () {

    $(window).scroll(function () {
        if ($(window).scrollTop() > 250) {
            $('#navigation').addClass('navbar-fixed');
            $('#placeholder').addClass('height');
        }
        if ($(window).scrollTop() > 150) {
            $('#row2').addClass('animated fadeIn');
        }
        if ($(window).scrollTop() > 650) {
            $('#row3').addClass('animated fadeIn');
        }
        if ($(window).scrollTop() < 251) {
            $('#navigation').removeClass('navbar-fixed');
            $('#placeholder').removeClass('height');
        }
    });
});

$(function () {
    $('a[href*=#]:not([href=#])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});