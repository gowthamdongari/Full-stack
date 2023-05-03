let setIntervalBtn = document.getElementById("setInterval");
let clearIntervalBtn = document.getElementById("clearInterval"); 

let uniqueId = null;

setIntervalBtn.onclick = function(){
    let counter = 0;
    uniqueId = setInterval(function(){
        console.log(counter);
        counter = counter + 1; 
    }, 2000);
}
console.log(uniqueId);

clearIntervalBtn.onclick = function(){
    clearInterval(uniqueId);
    console.log("Interval Cleared");
}