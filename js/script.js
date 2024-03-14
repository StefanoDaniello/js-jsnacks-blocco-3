// Crea un array vuoto e chiedi all'utente un numero da inserire nell'array. 
// Continua a chiedere i numeri all'utente e a inserirli nell'array fino a quando la somma degli elementi è minore di 50.

/*
let array =[];

let sommma = 0;

while ( sommma < 50){
    let userNumber=parseInt(prompt('inserisci un numero'));
    if(!isNaN(userNumber)){
        sommma += userNumber;
        array.push(userNumber);
    }
}
console.log(array,sommma)
*/






/**
 * Snack3
    Fai inserire un numero, che chiameremo N, all'utente.
    Genera con una funzione N array, ognuno formato da 10 numeri casuali da 1 a 100.
    Ogni volta che ne crei uno, stampalo.
*/


/*
let N =parseInt(prompt('inserisci un numero'));
 



function prova(){
    const newArray =[];
    for(i=0 ;i< 10; i++){
        newArray.push(getRndInteger(1,100));
    }
    return newArray;
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

for (let i = 0; i<N ; i++){
    const result = prova()
    console.log(result);
}
*/

/*
let N =parseInt(prompt('inserisci un numero'));

function oddOreven(){
    if(N % 2 === 0){
        return 'pari';
    }else{
        return 'dispari'
    }
}

let result=oddOreven(N)
console.log(result)
*/