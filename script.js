// script.js

function showRelatedCoursework() {
    var backButton = document.getElementById("back");

    // Hide the short bio
    document.getElementById("shortBio").style.display = "none";

    document.getElementById("github").style.display = "none";
    document.getElementById("linkedin").style.display = "none";

    document.getElementById("bioName").style.display = "none";
    document.getElementById("bioTitle").style.display = "none";

    document.getElementById("links").style.display = "none";

    
    // Show the related coursework
    document.getElementById("relatedCoursework").style.display = "block";

    document.getElementById("courseworkLink").style.display = "none";

    document.getElementById("CWTitle").style.display = "block";

    document.getElementById("back").style.display = "block";

    document.getElementById("bioMe").style.display = "none";

    backButton.onclick = function() {
        showShortBio();
    };
}

function showShortBio() {
    // Get the anchor element
    var courseworkLink = document.getElementById("courseworkLink");

    // Change the text back to "Related Coursework"
    courseworkLink.innerText = "Related Coursework";

    // Show the short bio
    document.getElementById("shortBio").style.display = "block";

    document.getElementById("github").style.display = "block";
    document.getElementById("linkedin").style.display = "block";

    document.getElementById("bioName").style.display = "block";
    document.getElementById("bioTitle").style.display = "block";

    // Hide the related coursework
    document.getElementById("relatedCoursework").style.display = "none";

    document.getElementById("CWTitle").style.display = "none";
    document.getElementById("back").style.display = "none";

    // Set the onclick attribute back to the original function
    courseworkLink.onclick = function() {
        showRelatedCoursework();
    };
}