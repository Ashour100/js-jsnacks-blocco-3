// /**
//  *
//  *
//     Crea due tag div con due id diversi:
//     un div avrà il testo colorato di rosso mentre l'altro di verde.
//     Partendo da un array di numeri, creo una funzione che controlla se siano pari o dispari.
//     Se sono pari li stampo nell'div "rosso",
//     se sono dispari li stampo nell'div "verde".
//  *
//  */


// function isPari(num){
//     if(num%2==0)
//         return true;

//     return false;
// }
// v=parseInt(prompt("Dim arr"));
// arr=[v];
// let numero;
// for(let i=0;i<v;i++){
//     numero=parseInt(prompt("Inserisci un numero"));
//     if(isPari(numero))
//         document.getElementById("first").innerHTML+="<br>"+numero;
//     else
//         document.getElementById("second").innerHTML+="<br>"+numero;
// }



// let Dim= document.getElementById("Dim");


// if(isPari(v))
//     Dim.classList.add("text-danger");
// else
//     Dim.classList.add("text-success");

// Dim.innerHTML="<br> Dim="+v;





// * creo un'altra funzione che controlla che la somma di due numeri x e y sia pari
// *
// * sommaPari(24214, 12451241) ==> true se la somma mi dà un numero pari
// *                            ==> false se la somma mi dà un numero dispari
// */


let num1=parseInt(prompt("insert a number"));
let num2=parseInt(prompt("insert a number"));

function sommaPari(num1,num2){
    let somma=num1+num2;
    if(somma%2==0)
        return true;
    
    return false;
}

if(sommaPari(num1,num2))
    alert("la somma è pari");
else
    alert("la somma è dispari");   