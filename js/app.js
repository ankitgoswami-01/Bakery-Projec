const toggleBtn = document.querySelector("#toggleBtn");
const navBar = document.querySelector(".header_container ul");
toggleBtn.addEventListener(
    "click",
    function(){
        toggleBtn.classList.toggle('fa-bars');
        toggleBtn.classList.toggle('fa-xmark');
        navBar.classList.toggle('openMenu'); 

    }
)