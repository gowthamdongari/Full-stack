let profileDetails = {
    imgSrc: "https://media.licdn.com/dms/image/D5603AQFsn3nacFG1bA/profile-displayphoto-shrink_800_800/0/1670376617726?e=1680739200&v=beta&t=SRzDy-tMX_4eDDo6Ci5zrfpsxJkbTryBQIXBjKQBZD4",
    name: "Gowtham Dongari",
    age: 26
};

let profileContainerE1 = document.getElementById("profileContainer");
profileContainerE1.classList.add("text-center", "d-flex", "flex-column", "justify-content-center");

let imageContainerE1 = document.getElementById("imgContainer");

let imgE1 = document.createElement("img");
imgE1.setAttribute("src", profileDetails.imgSrc);
imgE1.classList.add("profile-img");
imageContainerE1.appendChild(imgE1);

let nameE1 = document.createElement("h1");
nameE1.classList.add("profile-name");
nameE1.textContent = profileDetails.name;
profileContainerE1.appendChild(nameE1);

let ageE1 = document.createElement("p");
ageE1.classList.add("age")
ageE1.textContent = "Age: " + profileDetails.age;
profileContainerE1.appendChild(ageE1);