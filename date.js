  
let lastModified = document.lastModified;
document.querySelector("#last-modified").textContent = lastModified;

let year = new Date().getFullYear();
document.querySelector("#current-year").textContent = year;
