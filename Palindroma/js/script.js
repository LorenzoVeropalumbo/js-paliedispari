// faccio un for per scorrere la parola
// faccio un if per comparere le parlore dall' ultima alla prima
function isPalindrom (checkPalindrom) {

  // risulatato della function
  let bool = false;
  let reverseWorld = "";

  for (let i = checkPalindrom.length - 1; i >= 0; i--) {

    // prendo lettera per lettera
    reverseWorld += checkPalindrom[i];
  }

  // le paragono per vedere se sono palindrome
  if(checkPalindrom == reverseWorld){
      
    bool = true;

  } else {

    return bool = false;
  }
    // return della function
    return bool;
}

// chiedo all'utente la parola
let userWold = prompt("dimmi una parola").toLowerCase();

// richiamo la funzione
let returnValue = isPalindrom(userWold);

// printo il risultato della funzione
console.log(returnValue);
