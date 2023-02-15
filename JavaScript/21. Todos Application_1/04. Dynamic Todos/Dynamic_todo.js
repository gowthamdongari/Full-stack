let todoItemsContainer = document.getElementById("todoItemsContainer");


let todoList = [
    {
        Text: "Learn Html"
    },
    {
        Text: "Learn CSS"
    },
    {
        Text: "Learn JavaScript"
    }
];

function createAndAppendTodo(todo) {
    let todoElement = document.createElement("li");
todoElement.classList.add("todo-item-container", "d-flex", "flex-row");

todoItemsContainer.appendChild(todoElement);

let inputElement = document.createElement("input");
inputElement.type = "checkbox";
inputElement.id = "checkboxInput";
inputElement.classList.add("checkbox-input");

todoElement.appendChild(inputElement);

let labelContainer = document.createElement("div");
labelContainer.classList.add("label-container", "d-flex", "flex-row");

todoElement.appendChild(labelContainer);

let labelElement = document.createElement("label");
labelElement.setAttribute("for", "checkboxInput");
labelElement.classList.add("checkbox-label");
labelElement.textContent = todo.Text;

labelContainer.appendChild(labelElement);

let deleteIconContainer = document.createElement("div");
deleteIconContainer.classList.add("delete-icon-container");

labelContainer.appendChild(deleteIconContainer);

let deleteIcon = document.createElement("i")
deleteIcon.classList.add("far", "fa-trash-alt", "delete-icon");

deleteIconContainer.appendChild(deleteIcon);

}

for (let todo of todoList) {
    createAndAppendTodo(todo);
}


/*
let todoElement = document.createElement("li");
todoElement.classList.add("todo-item-container" "d-flex" "flex-row");

todoItemsContainer.appendChild(todoElement);

let inputElement = document.createElement("input");
inputElement.type = "checkbox";
inputElement.id = "checkboxInput";
inputElement.classList.add("checkbox-input");

todoElement.appendChild(inputElement);

let labelContainer = document.createElement("div");
labelContainer.classList.add("label-container", "d-flex", "flex-row");

todoElement.appendChild(labelContainer);

let labelElement = document.createElement("label");
labelElement.setAttribute("for", "checkboxInput");
labelElement.classList.add("checkbox-label");
labelElement.textContent = "Learn HTML";

labelContainer.appendChild(labelElement);

let deleteIconContainer = document.createElement("div");
deleteIconContainer.classList.add("delete-icon-container");

labelContainer.appendChild(deleteIconContainer);

let deleteIcon = document.createElement("i")
deleteIcon.classList.add("far", "fa-trash-alt", "delete-icon");

deleteIconContainer.appendChild(deleteIcon);

*/