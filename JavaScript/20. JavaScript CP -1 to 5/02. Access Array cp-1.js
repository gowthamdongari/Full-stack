/*
Given an array write a program to log the value located at the given index
*/
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
  // index
  let index = parseInt(readLine());
  // myArray
  let myArray = [25, false, "green", "apple"];

 console.log(myArray[index]);
}
