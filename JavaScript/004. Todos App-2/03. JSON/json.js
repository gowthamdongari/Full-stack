let profile = {
    name: "Harish",
    age: 10,
    city: "Hyderabad"
};

let stringifiedProfile = JSON.stringify(profile);
console.log(stringifiedProfile);
console.log(typeof(stringifiedProfile));


let stringifiedProfile2 = '{"name": "Ramki", "age":29, "designation":"Web Developer"}'
let parsedProfile = JSON.parse(stringifiedProfile2);
console.log(parsedProfile);
console.log(typeof(parsedProfile));

localStorage.setItem("profileDetails", J)


let profile2 = {
    name: "Harish",
    age: 10,
    city: "Hyderabad"
};

let stringifiedProfile3 = JSON.stringify(profile);
console.log(stringifiedProfile3);
console.log(typeof(stringifiedProfile3));
localStorage.setItem("profileDetails", stringifiedProfile3);


let stringifiedProfileFromStorage = localStorage.getItem("profileDetails");
let parsedProfile2 = JSON.parse(stringifiedProfileFromStorage);
console.log(parsedProfile2);
console.log(typeof(parsedProfile2));

localStorage.setItem("profileDetails", J)