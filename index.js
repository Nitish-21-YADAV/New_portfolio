
let subMenu=document.getElementById("subMenu");

function toggleMenu(){
    subMenu.classList.toggle("open-menu");
}

document.addEventListener('DOMContentLoaded', function() {
    var options = {
        strings: ["Web Developer", "Competative Coder"],
        typeSpeed: 150,
        backSpeed:120,
        loop:true
    };

    var typed = new Typed("#type_js", options);
});
