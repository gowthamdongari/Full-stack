"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", (_) => {
  inputString = inputString
    .trim()
    .split("\n")
    .map((str) => str.trim());

  main();
});

function readLine() {
  return inputString[currentLine++];
}

function main() {
  // arrayOfScores
  let arrayOfScores = JSON.parse(readLine().replace(/'/g, '"'));
  function calculateTotalScore() {
      let myArray = arrayOfScores;
      let totalScore = myArray[0] + myArray[1] + myArray[2];
      return totalScore;
      
  }

  let totalScore = calculateTotalScore(arrayOfScores);
  console.log(totalScore);
}
