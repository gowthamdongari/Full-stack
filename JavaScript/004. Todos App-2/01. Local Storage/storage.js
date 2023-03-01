let name = ocalStorage.setItem("name");
let gender = localStorage.setItem("gender" );
let city = localStorage.setItem("city");

console.log(name);
console.log(gender);
console.log(city);

let occupation = localStorage.setItem("occupation");
console.log(occupation);
// gives null value as occupation is not created in local storage

let selectedColor = null;
console.log(selectedColor);
console.log(typeof(selectedColor));