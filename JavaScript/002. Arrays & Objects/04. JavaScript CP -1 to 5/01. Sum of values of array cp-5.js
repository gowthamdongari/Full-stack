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
  // myArray
  let myArray = JSON.parse(readLine().replace(/'/g, '"'));
  let sumOfItems = 0;
  for (let item of myArray) {
      sumOfItems = sumOfItems + parseInt(item);
  }
  console.log(sumOfItems);
}
