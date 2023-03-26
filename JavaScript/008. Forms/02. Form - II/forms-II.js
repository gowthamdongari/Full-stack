let formData = {
    name: "",
    email: "",
    status: "Active",
    gender: "Male"
}

let workingStatusEl = document.getElementById("status");
workingStatusEl.addEventListener("change", function(event){
    formData.status = event.target.value;

});

let genderMaleEl = document.getElementById("genderMale");
genderMaleEl.addEventListener("change", function(event){
    formData.gender = event.target.value;
});

let genderFemaleEl = document.getElementById("genderFemale");
genderFemaleEl.addEventListener("change", function(event){
    formData.gender = event.target.value;
})



let myFormEl = document.getElementById("myForm");

myFormEl.addEventListener("submit", function(event){
    event.preventDefault(); //default behavior of page is stopped
    // https request
});

let nameEl = document.getElementById("name");
let nameErrMsgEl = document.getElementById("nameErrMsg");
nameEl.addEventListener("blur", function(event){
    if (event.target.value === "") {
        nameErrMsgEl.textContent = "Required*";
    } else{
        nameErrMsgEl.textContent = "";
    }
})

let emailEl = document.getElementById("email");
let emailErrMsgEl = document.getElementById("emailErrMsg");
emailEl.addEventListener("blur", function(event){
    if (event.target.value === "") {
        emailErrMsgEl.textContent = "Required*";
    } else{
        emailErrMsgEl.textContent = "";
    }
})