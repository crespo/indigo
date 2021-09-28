//var className = document.getElementById("container").className;
//alert(className);

function toggleMode() {
   // element = document.getElementById("topnav_container");
    
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

    element = document.getElementById("gitlink_container");
    element.classList.toggle("gitlink__dark-mode");
}