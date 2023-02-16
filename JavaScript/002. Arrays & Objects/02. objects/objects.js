let person = {
    name: "Rahul",
    age: 28,
    city: "Hyderabad"
};

console.log(person);

let personA = {
    name: "Rahul",
    age: 28,
    city: "Hyderabad"
    '1': "value1"
    "my choice": "testing"
};
console.log(personA);

/* Accesing Objects  dot notation, cannot be used
for invalid identifiers*/
console.log(person.name);

/* Accesing objects using brackets*/
console.log(person["name"]);

console.log(personA["1"]);

console.log(person.city);

/* Accesing key variable*/
let key = "name";
console.log(person.key);


/* Object Destructuring*/

let person {
    name: "Rakul",
    age: 28
};

let {name} = person;
console.log(name);

let { gender, age } = personA;
console.log(gender);
console.log(age);
/* gender not in personA will throw error or give undefined */

/* Modifying Object Property*/

/* Dot Notation */
let personB = {
    name = "Preetham",
    age: 25
};
personB.name = "Gowtham";
console.log(person.name);

/*Bracket Notation */
let personB = {
    name = "Preetham",
    age: 25
};
personB['name'] = "Gowtham";
console.log(personB['name'])