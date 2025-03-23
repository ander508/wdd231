const currentYear = new Date().getFullYear();
const thisYear = document.querySelector("#currentYear");
thisYear.innerHTML = currentYear;

const lastModified = document.querySelector("#lastModified");
let oLastModif = new Date(document.lastModified);
lastModified.innerHTML = `Last Modified: ${oLastModif.toLocaleString()}`;