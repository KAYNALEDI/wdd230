document.getElementById("year").innerHTML = new Date().getFullYear();

var x = document.lastModified;
document.getElementById("date").innerHTML = x;

function toggleMenu() {
   
    document.getElementById("primaryNav").classList.toggle("hide");
}
