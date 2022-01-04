const menuButton = document.querySelector("#menuButton");
const header = document.querySelector(".header");
const body = document.querySelector("body");
const fadeElements = document.querySelectorAll(".has-fade");
const menuLinks = document.querySelectorAll(".menu-link");

menuButton.addEventListener("click", function(){

    if(header.classList.contains("open")){ // Close Menu

        body.classList.remove("noscroll");
        header.classList.remove("open");
        fadeElements.forEach(function(element){
            element.classList.remove("fade-in");
            element.classList.add("fade-out");
        });
    }
    else{ // Open Menu

        body.classList.add("noscroll");
        header.classList.add("open");
        fadeElements.forEach(function(element){
            element.classList.add("fade-in");
            element.classList.remove("fade-out");
        }); 
    }
});

menuLinks.forEach(item => {
    item.addEventListener('click', event => {
        body.classList.remove("noscroll");
        header.classList.remove("open");
        fadeElements.forEach(function(element){
            element.classList.remove("fade-in");
            element.classList.add("fade-out");
        });
    });
  });