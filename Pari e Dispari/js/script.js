// faccio un for per scorrere la parola
// faccio un if per comparere le parlore dall' ultima alla prima
function isPalindrom (checkPalindrom) {

  // variabile per la comparazione
  let counter = 0;
  // risulatato della function
  let bool = false;
  
  for (let i = checkPalindrom.length - 1; i >= 0; i--) {

    // prendo lettera per lettera
    const palindomWorld = checkPalindrom[i];
    const reverseWorld = checkPalindrom[counter];

    // le paragono per vedere se sono palindrome
    if(palindomWorld == reverseWorld){
      
      bool = true;

    } else {

      return bool = false;
    }

    // incremento la variabile
    counter++;
    
    // return della function
    return bool;
  }
}

// chiedo all'utente la parola
let userWold = prompt("");

// richiamo la funzione
let returnValue = isPalindrom(userWold);

// printo il risultato della funzione
console.log(returnValue);
