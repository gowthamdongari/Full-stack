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
  // id
  let id = parseInt(readLine());
  // name
  let name = readLine();
  // email
  let email = readLine();
  function makePersonObject() {
      let personObject = {
          id : id,
          name : name,
          email : email,
      }
  return personObject;
  }

  let personObject = makePersonObject(id, name, email);
  console.log(personObject);
}
