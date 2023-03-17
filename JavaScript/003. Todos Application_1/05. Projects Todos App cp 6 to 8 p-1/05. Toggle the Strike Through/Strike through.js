let checkBoxWithLabelContainerEl = document.getElementById("checkBoxWithLabelContainer");
checkBoxWithLabelContainerEl.classList.add("text-center");

let inputEl = document.createElement("input");
inputEl.type = "checkbox";
inputEl.id = "checkbox";
checkBoxWithLabelContainerEl.appendChild(inputEl);

let labelEl = document.createElement("label");
labelEl.setAttribute("for", "checkbox");
labelEl.textContent = "This is a Label";
labelEl.id = "checkboxLabel";
labelEl.classList.add("checkboxLabel", "ml-2");
checkBoxWithLabelContainerEl.appendChild(labelEl);

function onCheckboxStatusChange(){
    labelEl.classList.toggle("strike-through")
}

inputEl.onclick = function(){
    onCheckboxStatusChange();
}

