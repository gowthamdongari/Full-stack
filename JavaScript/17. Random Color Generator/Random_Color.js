let bgColorsArray = ["#e75d7c","#b16cef","#53cca4","#efc84d","#628ef0", "#184b73","#883e7f","#ed048b"];

let bgContainerElement = document.getElementById('bgContainer');
let buttonElement = document.getElementById("button");

function clickMeButton(){
    let numberOfBgColors = bgColorsArray.length;
    let randomBgColorIndex = Math.ceil(Math.random()*numberOfBgColors);

    if (randomBgColorIndex === numberOfBgColors){
        randomBgColorIndex = numberOfBgColors -1;
    }
    let randomBgColor = bgColorsArray[randomBgColorIndex];
    bgContainerElement.style.backgroundColor = randomBgColor;

}