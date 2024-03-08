window.onload = function() {
    typeTextWithCursor('Sule Tekin', 'Computer Science Graduate', 'typeEff', 100);
  };
  
  function typeTextWithCursor(name, additionalText, targetElementId, speed) {
    var i = 0;
    var txt1 = name;
    var txt2 = additionalText;
    var typingSpeed = speed || 50; // Default typing speed
  
    function typeWriter() {
      if (i < txt1.length) {
        document.getElementById(targetElementId).innerHTML += txt1.charAt(i);
        i++;
        setTimeout(typeWriter, typingSpeed);
      } else {
        // After typing the name, move to a new line and start typing the additional text after a delay
        document.getElementById(targetElementId).innerHTML += "<br>" + "<br>"; // Move to a new line
        setTimeout(startTypingAdditionalText, 1000); // Pause for 1 second before typing the second text
      }
    }
  
    function startTypingAdditionalText() {
      // Add a blinking cursor on the left
      document.getElementById(targetElementId).innerHTML += "<span id='cursor'>&nbsp;</span>";
      setTimeout(function() {
        // After 1 second, remove the cursor and start typing the additional text
        document.getElementById("cursor").remove();
        typeWriter2();
      }, 1000);
    }
  
    function typeWriter2() {
      document.getElementById(targetElementId).innerHTML += txt2.charAt(i - txt1.length);
      i++;
      if (i <= txt1.length + txt2.length) {
        setTimeout(typeWriter2, typingSpeed);
      }
    }
  
    // Start typing when the function is called
    typeWriter();
  }
  



function showRelatedCoursework() {
    var backButton = document.getElementById("back");

    // Hide the short bio
    document.getElementById("shortBio").style.display = "none";

    document.getElementById("github").style.display = "none";
    document.getElementById("linkedin").style.display = "none";

    document.getElementById("typeEff").style.display = "none";
    document.getElementById("bioMe").style.display = "none";

    document.getElementById("links").style.display = "none";

    
    // Show the related coursework
    document.getElementById("relatedCoursework").style.display = "block";

    document.getElementById("courseworkLink").style.display = "none";

    document.getElementById("CWTitle").style.display = "block";

    document.getElementById("back").style.display = "block";

    document.getElementById("typeEff").style.display = "none";

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

