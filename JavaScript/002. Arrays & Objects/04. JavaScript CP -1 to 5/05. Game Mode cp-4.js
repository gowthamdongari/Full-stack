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
  // arrayOfFriends
  let arrayOfFriends = JSON.parse(readLine().replace(/'/g, '"'));
  
  let noOfFriends = arrayOfFriends.length;
  
  function getPreferredGameMode(noOfFriends) {
      if (arrayOfFriends.length === 0) {
          return "Solo";
      }
      else if (arrayOfFriends.length === 1) {
          return "Dual";
      }
      else {
          return "Squad";
      }
  }

  let gameMode = getPreferredGameMode(noOfFriends);
  console.log(gameMode);
}
