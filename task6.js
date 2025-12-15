// Refer to Task 6 in your Instructions to complete this task

const prompt = require("prompt-sync")();
const name = prompt("Ingresa tu nombre ");
const firstNumber = +prompt("Ingresa el primer número donde quieres que empiece el FizzBuzzWoof ")
const lastNumber = +prompt("Ingresa el último número al que quieres que llegue el FizzBuzzWoof ")
const fbwArray = []

for (i = firstNumber; i < lastNumber + 1; i++){
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
  fbwArray.push(salida)
}

console.log(fbwArray)