// Refer to Task 4 in your Instructions to complete this task

const prompt = require("prompt-sync")();
const name = prompt("Ingresa tu nombre ");

for (let i = 1; i < 106; i++){
  let salida = ""

  if (i % 3 == 0 || i % 5 == 0 || i % 7 == 0){
    if(i % 3 == 0)
      salida += "Fizz"
    if(i % 5 == 0)
      salida += "Buzz"
    if(i % 7 == 0)
      salida += "Woof"
  }
  else
    salida = i
    
  console.log(salida);
}