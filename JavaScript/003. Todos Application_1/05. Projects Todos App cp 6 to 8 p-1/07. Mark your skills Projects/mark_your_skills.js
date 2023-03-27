let skillList = [{
    skillName: "HTML",
    uniqueNo: 1,
},
{
    skillName: "CSS",
    uniqueNo: 2,
},
{
    skillName: "JavaScript",
    uniqueNo: 3,
}
];

let skillContainerEl = document.getElementById("skillContainer");

let skillListContainerEl = document.getElementById("skillListContainer");
skillListContainerEl.classList.add("text-center");

function onMarkSkill(labelId) {
let labelE1 = document.getElementById(labelId);
labelE1.classList.toggle("selected");
}

function createAndAppendSkill(skill){
let checkboxId = "checkbox" + skill.uniqueNo;
let labelId = "label" + skill.uniqueNo;

let skillEl = document.createElement("li");
skillEl.classList.add("p-1");
skillListContainerEl.appendChild(skillEl);

let checkboxEl = document.createElement("input");
checkboxEl.id = checkboxId;
checkboxEl.type = "checkbox";
checkboxEl.onclick = function() {
onMarkSkill(labelId);
};
skillEl.appendChild(checkboxEl);

let labelEl = document.createElement("label");
labelEl.setAttribute("for", checkboxId);
labelEl.classList.add("checkbox-label");
labelEl.id = labelId;
labelEl.textContent = skill.skillName;
skillEl.appendChild(labelEl);
}
for (let skill of skillList){
createAndAppendSkill(skill);
}









