// genera un numero random da 1 a 5
function randomNumber() {
  return Math.floor(Math.random() * 5) + 1;
}

// genera un numero random da 1 a 5
function isEvenOrOdd(numberToCheck) {
  
  let checkOddOrEven = "pari";

  if(numberToCheck % 2 !== 0){
    
    checkOddOrEven = "dispari";
  }

  return checkOddOrEven;
}

// l'utente sceglie se pari o dispari
const userOddOrEven = prompt("Scegli se pari o dispari").toLocaleLowerCase();

// l'utente sceglie un numero da 1 a 5
const userNumber = parseInt(prompt("Scegli un numero da 1 a 5"));

// mi salvo il numero del pc
let aiNumbers = randomNumber();

//  li sommo
let sum = aiNumbers + userNumber;

let evenOrOdd = isEvenOrOdd(sum);

console.log(userNumber);
console.log(aiNumbers);

// Controllo chi ha vinto
if(evenOrOdd === userOddOrEven){

  console.log("hai vinto");
} else {

  console.log("hai perso");
}