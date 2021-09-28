function toggleMode(wasOnClick) {
    if (wasOnClick || document.cookie.includes("lightMode")) {
        
        if (wasOnClick) {
            if (document.cookie.includes("lightMode")) {
                document.cookie = "darkMode";
            } else {
                document.cookie = "lightMode"    
            }
        }

        if (document.body.className.includes("contact")) {
            if (document.getElementById("mailicon").src.includes("resources/images/mail-inbox-app-light.png")) {
                document.getElementById("mailicon").src = "resources/images/mail-inbox-app.png";
            } else {
                document.getElementById("mailicon").src = "resources/images/mail-inbox-app-light.png";
            }
    
            if (document.getElementById("linkedinicon").src.includes("resources/images/linkedin-light.png")) {
                document.getElementById("linkedinicon").src = "resources/images/linkedin.png";
            } else {
                document.getElementById("linkedinicon").src = "resources/images/linkedin-light.png";
            }
    
            if (document.getElementById("instagramicon").src.includes("resources/images/instagram-light.png")) {
                document.getElementById("instagramicon").src = "resources/images/instagram.png";
            } else {
                document.getElementById("instagramicon").src = "resources/images/instagram-light.png";
            }
    
            if (document.getElementById("githubicon").src.includes("resources/images/github-light.png")) {
                document.getElementById("githubicon").src = "resources/images/github.png";
            } else {
                document.getElementById("githubicon").src = "resources/images/github-light.png";
            }
        } else {
            element = document.getElementById("gitlink_container");
            element.classList.toggle("gitlink__dark-mode");
        }
    
    
        var element = document.body;
        element.classList.toggle("body__dark-mode"); 
    
        element = document.getElementById("topnav_container");
        element.classList.toggle("topnav__dark-mode");
    
        element = document.getElementById("button1");
        element.classList.toggle("button__dark-mode");
    
        element = document.getElementById("button2");
        element.classList.toggle("button__dark-mode");
        
        element = document.getElementById("button3");
        element.classList.toggle("button__dark-mode");
    
        element = document.getElementById("button4");
        element.classList.toggle("button__dark-mode");
    
        element = document.getElementById("button5");
        element.classList.toggle("button__dark-mode");
    
        element = document.getElementById("footer_container");
        element.classList.toggle("footer__dark-mode");
    
        element = document.getElementById("container");
        element.classList.toggle("content__dark-mode");
    }

    
}