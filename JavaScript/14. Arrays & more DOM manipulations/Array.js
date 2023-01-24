let myArray = [5, 'six', 2, 8.2]
console.log(myArray);

myArray[1] = 6
console.log(myArray);

console.log(myArray.length); // length of the array //

myArray.push(true) // added new element at the end of the array
console.log(myArray);

let lastItem = myArray.pop() // removes last element    
console.log(lastItem);

// Creating HTML Heading Element//

let h1Element = document.createElement('h1');
h1Element.textContent = 'Web Technologies';
let containerElement = document.getElementById('myContainer');
containerElement.appendChild(h1Element);

let btnElement = document.createElement('button');
btnElement.textContent = 'Change Heading';
containerElement.appendChild(btnElement);

// funstion expression //
let showMessage = function(){
    console.log('Hello');
}
showMessage();

btnElement.onclick = function(){
    h1Element.textContent = '4.0 Technologies';
    h1Element.style.color = 'blue';
    h1Element.style.fontSize = '40px';
    h1Element.style.fontFamily = 'Caveat';
    h1Element.style.textDecoration = 'under line';
}

let removeStylesBtnElement = document.createElement('button');
removeStylesBtnElement.textContent = 'Remove Styles';
removeStylesBtnElement.onclick = function(){
    h1Element.classList.remove('heading');
}
document.getElementById('myContainer').appendChild(removeStylesBtnElement);