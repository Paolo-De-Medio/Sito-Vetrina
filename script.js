// NAVBAR ANIMATION
let myNav = document.getElementById('navbar');

window.onscroll = function() {

    "use strict";
    
    if(document.body.scrollTop >= 500 || document.documentElement.scrollTop >= 500){
        myNav.classList.add("changeColor");
    } else {
        myNav.classList.remove("changeColor");
    };

};