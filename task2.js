// Refer to Task 2 in your Instructions to complete this task
const prompt = require("prompt-sync")();
const name = prompt("Ingresa tu nombre ");
for (let i = 1; i < 106; i++){
  if(i % 3 == 0)
    console.log("Fizz")
  else
    console.log(i);
}