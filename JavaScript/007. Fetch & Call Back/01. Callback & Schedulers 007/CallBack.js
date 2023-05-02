// Call Back is a function that is passed as an argument to another function //

function displayGreeting(displayName){
    console.log("Hello");
    displayName();
    console.log("Good Morning!");
}
function displayGowtham(){
    console.log("Gowtham");

}
displayGreeting(displayGowtham);