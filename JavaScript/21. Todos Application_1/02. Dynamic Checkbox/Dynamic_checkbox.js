let inputElement = document.createElement('input');
inputElement.type = "checkbox";
inputElement.id = "myCheckbox";

document.body.appendChild(inputElement);

/*
// using html for

let labelElement = document.createElement("label");
labelElement.htmlFor = "myCheckbox";
labelElement.textContent = "Graduated";

document.body.appendChild(labelElement);

*/

// using set attribute
let labelElement = document.createElement("label");
labelElement.setAttribute("for", "myCheckbox");
labelElement.textContent = "Graduated";

document.body.appendChild(labelElement);