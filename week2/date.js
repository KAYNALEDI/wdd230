// declarations
const d = new Date();
const year = d.getFullYear();
const lastmod = document.querySelector('#lastmod');

// using querySelector
document.querySelector('#currentyear').textContent = year;
document.querySelector('#lastmod').textContent += `Last Update: ${document.lastModified}`;
