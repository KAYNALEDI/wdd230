//chamber menu
function toggleMenu () {
	document.getElementById("navBar").classList.toggle("open");
	document.getElementById("chamberButton").classList.toggle("open");
}
const x = document.getElementById("chamberButton");
x.onclick = toggleMenu
document.getElementById("year").innerHTML = new Date().getFullYear();

var x = document.lastModified;
document.getElementById("date").innerHTML = x;

function toggleMenu() {
   
    document.getElementById("primaryNav").classList.toggle("hide");
}
